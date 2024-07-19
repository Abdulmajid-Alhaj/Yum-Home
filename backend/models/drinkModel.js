const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema({
    drinkName : {
        type : String,
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

const Drink = mongoose.Model('Drink',drinkSchema)

module.exports = Drink