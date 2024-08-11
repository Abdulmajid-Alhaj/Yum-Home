const Food = require('../models/foodModel')
const Sweet = require('../models/sweetModel')
const Drink = require('../models/drinkModel')

const getAllFood = async (req,res) => {
    try {
        const food = await Food.find()
        if(!food){
            return res.status(404).json({msg: "No food found"})
        }
        res.status(200).json(food)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getAllSweet = async (req,res) => {
    try {
        const sweet = await Sweet.find()
        if(!sweet){
            return res.status(404).json({msg: "No sweet found"})
        }
        res.status(200).json(sweet)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
const getAllDrink = async (req,res) => {
    try {
        const drink = await Drink.find()
        if(!drink){
            return res.status(404).json({msg: "No drink found"})
        }
        res.status(200).json(drink)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    getAllFood,
    getAllSweet,
    getAllDrink
}