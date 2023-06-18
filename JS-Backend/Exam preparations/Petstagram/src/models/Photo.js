const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  description: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  owner: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  comments: [
    {
      username: {
        type: String,
        required: [true, 'Username is requered!'],
      },
      message: {
        type: String,
        required: [true, 'Comment message is requered!'],
      },
    },
  ],
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
