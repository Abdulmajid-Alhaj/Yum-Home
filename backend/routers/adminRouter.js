const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const drinkController = require('../controllers/drinkController');
const sweetController = require('../controllers/sweetController');


router.post('/food', foodController.createFood);
router.get('/food', foodController.getAllFoods);
router.get('/food/:foodId', foodController.getFood);
router.put('/food/:foodId', foodController.updateFood);
router.delete('/food/:foodId', foodController.deleteFood);

router.post('/drink', drinkController.createDrink);
router.get('/drink',drinkController.getAllDrinks);
router.get('/drink/:drinkId', drinkController.getDrink);
router.put('/drink/:drinkId', drinkController.updateDrink);
router.delete('/drink/:drinkId', drinkController.deleteDrink);

router.post('/sweet', sweetController.createSweet);
router.get('/sweet',sweetController.getAllSweets);
router.get('/sweet/:sweetId', sweetController.getSweet);
router.put('/sweet/:sweetId', sweetController.updateSweet);
router.delete('/sweet/:sweetId', sweetController.deleteSweet);


module.exports = router;