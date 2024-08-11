const Food = require('../models/foodModel')

exports.createFood = async (req, res) => {
    try {
      const { foodName, price, description, imageUrl } = req.body;
      const existFood = await Food.findOne({ foodName });
    if (existFood) {
      return res.status(400).json({ msg: 'Food item already exists' });
    }

      const newFood = new Food({ foodName, price, description, imageUrl });
      if(newFood){
          await newFood.save();
          return res.status(201).json(newFood);
      }
    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: 'Error create food' });
    }
  };


  exports.getFood = async (req, res) => {
    try {
      const foodId = req.params.foodId;
      const food = await Food.findById(foodId);
      if (!food) {
        res.status(404).json({ msg: 'Food not found' });
      } else {
        res.status(200).json(food);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Error get food' });
    }
  };


  exports.updateFood = async (req, res) => {
    try {
      const foodId = req.params.foodId;
      const { foodName, price, description, imageUrl } = req.body;
      const food = await Food.findByIdAndUpdate(foodId, { foodName, price, description, imageUrl }, { new: true });
      if (!food) {
        res.status(404).json({ msg: 'Food not found' });
    } else {
        res.status(200).json(food);
    }
} catch (err) {
    console.error(err);
    res.status(400).json({ msg: 'Error update food' });
}

exports.deleteFood = async (req, res) => {
    try{
        const foodId = req.params.foodId;
        await Food.findByIdAndRemove(foodId);
        res.status(204).json({msg: 'deleted food'})
    } catch(err) {
        console.error(err);
        res.status(400).json({msg: 'Error delete food'})
    }
}

  };

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    if(!foods){
        return res.status(404).json({msg: "Food not found"})
    }
    res.status(200).json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error get food' });
  }
};