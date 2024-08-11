const User = require('../models/usersModel')
const bcryptjs = require('bcryptjs')
const generateTokenAndSetCookie = require('../utils/generateTokenAndSetCookies');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const signUpUser = async (req , res) => {
    try{
        const {username,email,password,confirmPassword,phoneNumber,address} = req.body;
        
        for(let i = 0; i < username.length; i++){
            if(username.toLowerCase().charCodeAt(i) < 97 || username.toLowerCase().charCodeAt(i) > 123){
                return res.status(400).json({msg: "Invalid username"})
            }
        }

        if(username.length < 3){
            return res.status(400).json({msg: "Username should be at least 3 characters long"})
        }

        const emailUser = await User.findOne({email})

        if(emailUser) {
            return res.status(400).json({msg: "User already exists"})
        }

        if (password !== confirmPassword) {
			return res.status(400).json({msg: "Passwords don't match" });
		}

        if(password.length < 8){
            return res.status(400).json({msg: "Password should be at least 8 characters long"})
        }
        
        if(phoneNumber.length < 10){
            return res.status(400).json({msg: "Phone number should be at least 10 characters long"})
        }

        for(let i = 0; i < phoneNumber.length; i++) {
            if(phoneNumber.charCodeAt(i) < 48 || phoneNumber.charCodeAt(i) > 57){
                return res.status(400).json({msg: "Invalid phone number"})
            }
        }

        const hashPassword = await bcryptjs.hash(password,10)
        
        const otp1 = Math.floor(Math.random()*10)
        const otp2 = Math.floor(Math.random()*10)
        const otp3 = Math.floor(Math.random()*10)
        const otp4 = Math.floor(Math.random()*10)
        
        const otp = `${otp1}${otp2}${otp3}${otp4}`
        const verificationCodeExpires = new Date(Date.now() + 10 * 60 * 1000)

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP Code is ${otp}`,
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email: ' + error.message);
            }else {
                console.log("Send Otp Successfully");
            }
        });

        const newUser = new User ({
            username,
            email,
            password : hashPassword,
            confirmPassword : hashPassword,
            phoneNumber,
            address,
            otp,
            verificationCodeExpires
        })

        if(newUser){
            await newUser.save();
            res.status(201).json({msg: "verify your email" , email})
        }else { 
            res.status(400).json({msg: "Invalid user data"})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

const loginUser = async (req , res) => {
    try{
        const {email , password} = req.body
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({msg: "User not found"})
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password || "")
        
        if(!isPasswordCorrect){
            return res.status(404).json({msg: "Invalid email or password"})
        }

        const isVerified = user.isVerified

        if(!isVerified){
            return res.status(404).json({msg: "Please verify your email"})
        }
        generateTokenAndSetCookie(user._id , res);

        res.status(200).json({
            _id : user._id,
            username : user.username,
        })
    }
    catch(err){
        res.status(500).json({msg: "Error in server"});
    }
}

const verifyEmail = async (req,res) => {
    try {
        const {email , otp} = req.body

        const user = await User.findOne({
            email,
            otp : otp,
            verificationCodeExpires: { $gt: Date.now()}
        });
        
        if(!user){
            return res.status(404).json({msg: "'Invalid or expired OTP"})
        }

        user.isVerified = true
        
        generateTokenAndSetCookie(user._id, res)

        await user.save()

        res.status(200).json({
            _id : user._id,
            username : user.username
        })

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const resendOtp = async (req,res) => {
    try {
        const {email} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({msg: "User not found"})
        }

        const otp1 = Math.floor(Math.random()*10)
        const otp2 = Math.floor(Math.random()*10)
        const otp3 = Math.floor(Math.random()*10)
        const otp4 = Math.floor(Math.random()*10)
        
        user.otp = `${otp1}${otp2}${otp3}${otp4}`
        user.verificationCodeExpires = new Date(Date.now() + 10 * 60 * 1000)

        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP Code is ${user.otp}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email: ' + error.message);
            }else {
                console.log("Send Otp Successfully");
            }
        });
        await user.save()

        res.status(200).json({
            msg : "resend successfully"
        })

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

//logout contoller
const logOutUser = async (req , res) => {
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({msg: "User logged out"})
    }
    catch(err){
        res.status(500).json({msg: "Error in server"});
    }
}

module.exports = { 
    signUpUser,
    loginUser,
    logOutUser,
    verifyEmail,
    resendOtp,
}