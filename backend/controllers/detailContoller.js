const Food = require('../models/foodModel')
const Sweet = require('../models/sweetModel')
const Drink = require('../models/drinkModel')
const User = require('../models/userModel')

const getFoodDetail = async (req,res) => {
    try {
        const {foodId} = req.params
        const food = await Food.findById(foodId)
        if(!food){
            return res.status(404).json({msg: "Food not found"})
        }
        res.status(200).json(food)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getSweetDetail = async (req,res) => {
    try {
        const {sweetId} = req.params
        const sweet = await Sweet.findById(sweetId)
        if(!sweet){
            return res.status(404).json({msg: "Sweet not found"})
        }
        res.status(200).json(sweet)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getDrinkDetail = async (req,res) => {
    try {
        const {drinkId} = req.params
        const drink = await Drink.findById(drinkId)
        if(!drink){
            return res.status(404).json({msg: "drink not found"})
        }
        res.status(200).json(drink)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const addFoodToFavorite = async (req,res) => {
    try {
        const {userId , foodId} = req.params
        const user = await User.findById(userId)
        
        if(!user){
            return res.status(404).json({msg: "User not found"})
        }

        const food = await Food.findById(foodId)

        if(!food){
            return res.status(404).json({msg: "Food not found"})
        }

        if (user.favoriteFood.includes(foodId)) {
            return res.status(400).json({ msg: "Food already in favorites" })
        }
        
        user.favoriteFood.push(foodId)
        await user.save()
        res.status(201).json(user.favoriteFood)

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
const addDrinkToFavorite = async (req,res) => {
    try {
        const {userId , drinkId} = req.params
        const user = await User.findById(userId)
        
        if(!user){
            return res.status(404).json({msg: "User not found"})
        }

        const drink = await Drink.findById(drinkId)

        if(!drink){
            return res.status(404).json({msg: "Drink not found"})
        }

        if (user.favoriteDrink.includes(drinkId)) {
            return res.status(400).json({ msg: "Drink already in favorites" })
        }

        user.favoriteDrink.push(drinkId)
        await user.save()
        res.status(201).json(user.favoriteDrink)

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
const addSweetToFavorite = async (req,res) => {
    try {
        const {userId , sweetId} = req.params
        const user = await User.findById(userId)
        
        if(!user){
            return res.status(404).json({msg: "User not found"})
        }

        const sweet = await Sweet.findById(sweetId)

        if(!sweet){
            return res.status(404).json({msg: "Sweet not found"})
        }

        if (user.favoriteSweet.includes(sweetId)) {
            return res.status(400).json({ msg: "Sweet already in favorites" })
        }

        user.favoriteSweet.push(sweetId)
        await user.save()
        res.status(201).json(user.favoriteSweet)

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getAllFavorites = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await User.findById(userId).populate('favoriteFood').populate('favoriteSweet').populate('favoriteDrink')
        
        if (!user) {
            return res.status(404).json({ msg: "User not found" })
        }

        const everyFavorites = {
            favoriteFood: user.favoriteFood,
            favoriteSweet: user.favoriteSweet,
            favoriteDrink: user.favoriteDrink
        }

        res.status(200).json(everyFavorites)

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const removeFavorite = async (req, res) => {
    try {
        const { userId, itemId, type } = req.params

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ msg: "User not found" })
        }

        let update

        switch (type) {
            case 'food':
                update = { $pull: { favoriteFood: itemId } }
                break
            case 'sweet':
                update = { $pull: { favoriteSweet: itemId } }
                break
            case 'drink':
                update = { $pull: { favoriteDrink: itemId } }
                break
            default:
                return res.status(400).json({ msg: "Invalid favorite type" })
        }

        const userRemovefavorite = await User.findByIdAndUpdate(userId, update)

        await userRemovefavorite.save()

        res.status(200).json({ msg: `${type.charAt(0).toUpperCase() + type.slice(1)} removed from favorites` })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    getFoodDetail,
    getSweetDetail,
    getDrinkDetail,
    addFoodToFavorite,
    addDrinkToFavorite,
    addSweetToFavorite,
    getAllFavorites,
    removeFavorite
}