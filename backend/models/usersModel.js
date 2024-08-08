const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        minLength : 3
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
        maxlength : 32
    },
    confirmPassword : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 32
    },
    phoneNumber : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
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
    verificationExpires : {
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