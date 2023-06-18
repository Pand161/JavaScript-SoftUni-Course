const router = require('express').Router();
const photoManager = require('../managers/photoManager');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/catalog', async (req, res) => {
  const photo = await photoManager.getAllPhotos();

  res.render('catalog', { photo });
});

module.exports = router;
