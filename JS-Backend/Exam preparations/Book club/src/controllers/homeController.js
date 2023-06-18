const router = require('express').Router();
const bookManager = require('../managers/bookManager');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/catalog', async (req, res) => {
  const books = await bookManager.getAllBooks();
  res.render('catalog', { books });
});

module.exports = router;
