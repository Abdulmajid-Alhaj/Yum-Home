const express = require('express')
const router = express.Router()
const detail = require('../controllers/detailContoller')

router.get("/menu/:foodId",detail.getFoodDetail)
router.get('/menu/:sweetId', detail.getSweetDetail)
router.get('/menu/:drinkId', detail.getDrinkDetail)
router.post('/:userId/favorite/:foodId', detail.addFoodToFavorite)
router.post('/:userId/favorite/:sweetId', detail.addSweetToFavorite)
router.post('/:userId/favorite/:drinkId', detail.addDrinkToFavorite)
router.delete('/:userId/favorite/:itemId/:type', detail.removeFavorite)

module.exports = router