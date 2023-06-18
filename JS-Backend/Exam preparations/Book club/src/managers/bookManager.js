const Book = require('../models/Book');

exports.createBook = async (bookData) => await Book.create(bookData);

exports.getAllBooks = async () => await Book.find().lean();

exports.getBookById = async (bookId) => await Book.findById(bookId).lean();

exports.wishToRead = async (bookId, userId) =>
  await Book.findByIdAndUpdate(
    bookId,
    { $push: { wishList: userId } },
    { new: true }
  );

exports.deleteBook = async (bookId) => await Book.findByIdAndDelete(bookId);

exports.updateBook = async (bookId, bookData) =>
  await Book.findByIdAndUpdate(bookId, bookData);
