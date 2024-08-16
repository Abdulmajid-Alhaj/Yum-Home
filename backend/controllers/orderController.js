const Order = require('../models/orderModel')
const User = require('../models/userModel')
const Food = require('../models/foodModel')
const Sweet = require('../models/sweetModel')
const Drink = require('../models/drinkModel')

const addToCart = async (req,res) => {
    try {
        const {userId ,itemId} = req.params
        const {orderDetails,orderDate,total} = req.body

        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({msg: 'User not found'})
        }

        const item = await Food.findById(itemId) || await Sweet.findById(itemId) || await Drink.findById(itemId)

        if(!item){
            return res.status(404).json({msg: 'Item not found'})
        }

        const price = item.price 

        const newOrder = new Order({
            orderDetails,
            orderDate,
            total
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}