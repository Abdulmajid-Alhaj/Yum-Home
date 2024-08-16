const Sweet = require('../models/sweetModel')

const createSweet = async (req, res) => {
    try {
      const { sweetName, price, description, imageUrl } = req.body;
      const existSweet = await Sweet.findOne({ sweetName });
    if (existSweet) {
      return res.status(400).json({ msg: 'Sweet item already exists' });
    }

      const newSweet = new Sweet({ sweetName, price, description, imageUrl });
      if(newSweet){
          await newSweet.save();
          return res.status(201).json(newSweet);
      }
    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: 'Error create food' });
    }
  };


  const getSweet = async (req, res) => {
    try {
      const SweetId = req.params.sweetNameId;
      const sweet = await Sweet.findById(sweetId);
      if (!sweet) {
        res.status(404).json({ msg: 'Sweet not found' });
      } else {
        res.status(200).json(sweet);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Error get sweet' });
    }
  };


  const updateSweet = async (req, res) => {
    try {
      const sweetId = req.params.foodId;
      const { sweetName, price, description, imageUrl } = req.body;
      const sweet = await Sweet.findByIdAndUpdate(sweetId, { sweetName, price, description, imageUrl }, { new: true });
      if (!sweet) {
        res.status(404).json({ msg: 'Sweet not found' });
    } else {
        res.status(200).json(sweet);
    }
} catch (err) {
    console.error(err);
    res.status(400).json({ msg: 'Error update sweet' });
}
  }

const deleteSweet = async (req, res) => {
    try{
        const sweetId = req.params.sweetId;
        await Sweet.findByIdAndRemove(sweetId);
        res.status(204).json({msg: 'deleted sweet'})
    } catch(err) {
        console.error(err);
        res.status(400).json({msg: 'Error delete sweet'})
    }
}

const getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    if(!sweets){
        return res.status(404).json({msg: "Sweet not found"})
    }
    res.status(200).json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error get sweet' });
  }
};

module.exports = {
  getAllSweets,
  createSweet,
  getSweet,
  updateSweet,
  deleteSweet,
}