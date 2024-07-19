const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    foodId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Food'
    },
    sweetId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Sweet'
    },
    drinkId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Drink'
    }
})

const Favorite = mongoose.Model('Favorite',favoriteSchema)

module.exports = Favorite