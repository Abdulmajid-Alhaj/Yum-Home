const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    confirmPassword : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    comment : {
        type : String
    },
    rate : {
        type : String
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    otp : {
        type : String,
        required : true
    },
    verificationExpires : {
        type : Date,
        required : true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User