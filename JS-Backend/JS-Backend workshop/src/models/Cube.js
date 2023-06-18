const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minLength: 3,
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
  difficultyLevel: {
    required: true,
    type: Number,
    min: [1, 'Difficulty Level starts from 1'],
    max: [10, 'Maximum difficuly level is 10'],
  },
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Accessory',
    },
  ],
  owner: [{ type: mongoose.Types.ObjectId, ref: 'owner' }],
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
