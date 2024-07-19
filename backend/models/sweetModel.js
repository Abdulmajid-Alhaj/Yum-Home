const mongoose = require('mongoose')

const sweetSchema = mongoose.Schema({
    sweetName : {
        type : String ,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    }
})

const Sweet = mongoose.Model('Sweet',sweetSchema)

module.exports = Sweet