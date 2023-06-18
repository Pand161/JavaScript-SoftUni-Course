const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minLength: [2, 'Minimum length for name is 2 characters'],
  },
  years: {
    required: true,
    type: Number,
    min: [1, 'Years should be a positive number'],
    max: [100, 'max number for years is 100 years old'],
  },
  kind: {
    required: true,
    type: String,
    minLength: [3, 'Minimum length for kind is 3 characters'],
  },
  imageUrl: {
    required: true,
    type: String,
    validate: {
      validator: function (value) {
        return /^(https?)/.test(value);
      },
      message: 'URL must start with "http" or "https"',
    },
  },
  need: {
    required: true,
    type: String,
    minLength: [3, 'Minimum length for needs is 3 characters'],
    maxLength: [20, 'Maximum lnegth for needs is 20 characters'],
  },
  location: {
    required: true,
    type: String,
    minLength: [5, 'Minimum length for location is 5 characters'],
    maxLength: [15, 'Maximum lnegth for location is 15 characters'],
  },
  description: {
    required: true,
    type: String,
    minLength: [5, 'Minimum length for description is 5 characters'],
    maxLength: [50, 'Maximum lnegth for description is 50 characters'],
  },
  donations: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
