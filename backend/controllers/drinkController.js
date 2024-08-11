const Drink = require('../models/drinkModel')

exports.createDrink = async (req, res) => {
    try {
      const { drinkName, price, description, imageUrl } = req.body;
      const existDrink = await Food.findOne({ drinkNameName });
    if (existFood) {
      return res.status(400).json({ msg: 'Drink item already exists' });
    }

      const newDrink = new Food({ drinkName, price, description, imageUrl });
      if(newDrink){
          await newDrink.save();
          return res.status(201).json(newDrink);
      }
    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: 'Error create drink' });
    }
  };


  exports.getDrink = async (req, res) => {
    try {
      const drinkId = req.params.drinkId;
      const drink = await Drink.findById(drinkId);
      if (!drink) {
        res.status(404).json({ msg: 'Drink not found' });
      } else {
        res.status(200).json(drink);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Error get drink' });
    }
  };


  exports.updateDrink = async (req, res) => {
    try {
      const drinkId = req.params.drinkId;
      const { drinkName, price, description, imageUrl } = req.body;
      const drink = await Food.findByIdAndUpdate(drinkId, { drinkName, price, description, imageUrl }, { new: true });
      if (!drink) {
        res.status(404).json({ msg: 'Drink not found' });
    } else {
        res.status(200).json(food);
    }
} catch (err) {
    console.error(err);
    res.status(400).json({ msg: 'Error update drink' });
}

exports.deleteDrink = async (req, res) => {
    try{
        const drinkId = req.params.drinkId;
        await Drink.findByIdAndRemove(drinkId);
        res.status(204).json({msg: 'deleted drink'})
    } catch(err) {
        console.error(err);
        res.status(400).json({msg: 'Error delete drink'})
    }
}

  };

exports.getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();
    if(!drinks){
        return res.status(404).json({msg: "Drink not found"})
    }
    res.status(200).json(drinks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error get drink' });
  }
};