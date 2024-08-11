const express = require('express');
const router = express.Router();
const foodController = require('./food.controller');
const drinkController = require('./drink.controller');
const sweetController = require('./sweet.controller');


router.post('/api/yum/food', foodController.createFood);
router.get('/api/yum/food', foodController.getAllFoods);
router.get('/api/yum/food/:foodId', foodController.getFood);
router.put('/api/yum/food/:foodId', foodController.updateFood);
router.delete('/api/yum/food/:foodId', foodController.deleteFood);

router.post('/api/yum/drink', drinkController.createDrink);
router.get('/api/yum/drink',drinkController.getAllDrinks);
router.get('/api/yum/drink/:drinkId', drinkController.getDrink);
router.put('/api/yum/drink/:drinkId', drinkController.updateDrink);
router.delete('/api/yum/drink/:drinkId', drinkController.deleteDrink);

router.post('/api/yum/sweet', sweetController.createSweet);
router.get('/api/yum/sweet',sweetController.getAllSweets);
router.get('/api/yum/sweet/:sweetId', sweetController.getSweet);
router.put('/api/yum/sweet/:sweetId', sweetController.updateSweet);
router.delete('/api/yum/sweet/:sweetId', sweetController.deleteSweet);


module.exports = router;