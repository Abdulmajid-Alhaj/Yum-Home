const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    type : [
    {
        foodId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Food'
        }
    },
    {
        sweetId :{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Sweet'
        }
    },
    {
        drinkId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Drink'
        }
    }],
    orderDate : {
        type : Date,
        required : true
    },
    total : {
        type : String,
        required : true
    },
    orderStatus : {
        type : String,
        enum : ['unCompleted' , 'Completed']
    }
})

const Order = mongoose.Model('Order',orderSchema)

module.exports = Order