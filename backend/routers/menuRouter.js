const express = require('express')
const router = express.Router()
const menu = require('../controllers/menuController')

router.get("/menu/food",menu.getAllFood)
router.get('/menu/sweet', menu.getAllSweet)
router.get('/menu/drink', menu.getAllDrink)


module.exports = router