const router = require('express').Router();
const bookManager = require('../managers/bookManager');

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  const { name, author, genre, stars, imageUrl, review } = req.body;
  await bookManager.createBook({
    name,
    author,
    genre,
    stars,
    imageUrl,
    review,
    owner: req.user._id,
  });

  res.redirect('/catalog');
});

router.get('/details/:bookId', async (req, res) => {
  const book = await bookManager.getBookById(req.params.bookId);
  let isOwner = false;
  let hasBought = false;

  if (req.user?._id === book.owner.toString()) {
    isOwner = true;
  } else if (book.wishList.find((x) => x == req.user?._id)) {
    hasBought = true;
  }

  res.render('details', { book, isOwner, hasBought });
});

router.get('/wish/:bookId', async (req, res) => {
  const book = await bookManager.wishToRead(req.params.bookId, req.user._id);

  res.redirect('/catalog');
});

router.get('/delete/:bookId', async (req, res) => {
  const book = await bookManager.getBookById(req.params.bookId);

  if (book.owner == req.user?._id) {
    await bookManager.deleteBook(req.params.bookId);
  }

  res.redirect('/catalog');
});

router.get('/edit/:bookId', async (req, res) => {
  const book = await bookManager.getBookById(req.params.bookId);

  if (book.owner != req.user?._id) {
    res.redirect('/catalog');
  }

  res.render('edit', { book });
});

router.post('/edit/:bookId', async (req, res) => {
  const { name, author, genre, stars, imageUrl, review } = req.body;
  await bookManager.updateBook(req.params.bookId, {
    name,
    author,
    genre,
    stars,
    imageUrl,
    review,
  });

  res.redirect(`/book/details/${req.params.bookId}`);
});

module.exports = router;
