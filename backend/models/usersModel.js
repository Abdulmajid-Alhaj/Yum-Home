const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 150
    },
    confirmPassword : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 150
    },
    phoneNumber : {
        type : String,
        required : true,
        minlength : 10
    },
    address : {
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
    verificationCodeExpires : {
        type : Date,
        required : true
    },
    favoriteFood : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Food'
        }
    ],
    favoriteSweet : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Sweet'
        }
    ],
    favoriteDrink : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Drink'
        }
    ]
})

const User = mongoose.model('User',userSchema)

module.exports = User