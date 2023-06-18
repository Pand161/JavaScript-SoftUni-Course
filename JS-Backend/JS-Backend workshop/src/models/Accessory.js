const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
    minLength: [3, 'Description must be atleast 3 symbols long'],
    maxLength: [100, 'Description should be less than 100 symbols'],
  },
  imageUrl: {
    required: true,
    type: String,
  },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
