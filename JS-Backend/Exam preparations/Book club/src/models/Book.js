const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  wishList: [
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

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
