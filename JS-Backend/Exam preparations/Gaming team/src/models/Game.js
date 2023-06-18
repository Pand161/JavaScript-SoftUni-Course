const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    required: [true, 'Username is required'],
    minLength: [4, 'Name should be atleast 4 characters long'],
    type: String,
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    validate: {
      validator: function (value) {
        return /^(https?)/.test(value);
      },
      message: 'URL must start with "http" or "https"',
    },
  },
  price: {
    required: [true, 'Price is required'],
    type: Number,
    validate: {
      validator: function (value) {
        return value > 0;
      },
      message: 'Price must be a positive number',
    },
  },
  description: {
    required: [true, 'Description is required'],
    type: String,
    minLength: [10, 'Description should be atleast 10 characters long'],
  },
  genre: {
    required: [true, 'Genre is required'],
    type: String,
    minLength: [2, 'Genre should be atleast 2 characters long'],
  },
  platform: {
    required: [true, 'Platform is required'],
    type: String,
    enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
  },
  boughtBy: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  owner: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
