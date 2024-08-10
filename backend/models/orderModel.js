const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    orderDetails : [
        {
            detailId : {
                type : mongoose.Schema.Types.ObjectId
            },
            type : {
                type : String,
                enum : ['food','sweet','drink']
            }
        }
    ],
    orderDate : {
        type : Date,
        required : true
    },
    total : {
        type : Number,
        required : true
    },
    orderStatus : {
        type : String,
        enum : ['being prepared', 'being deliveried' , 'recieved']
    }
})

const Order = mongoose.model('Order',orderSchema)

module.exports = Order