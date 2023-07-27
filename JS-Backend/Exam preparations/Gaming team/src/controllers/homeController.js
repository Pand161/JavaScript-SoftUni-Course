const router = require('express').Router();
const gameManager = require('../managers/gameManager');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/catalog', async (req, res) => {
  const game = await gameManager.getAllGames();
  res.render('catalog', { game });
});

router.get('/search', async (req, res) => {
  const game = await gameManager.getAllGames();
  res.render('search', { game });
});

router.post('/search', async (req, res) => {
  const { name, platform } = req.body;
  // const game = await gameManager.getAllGames();
  const game = await gameManager.getSearchedGames(name, platform);
  res.render('search', { game });
});

router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;
