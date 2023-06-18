const router = require('express').Router();
const animalManager = require('../managers/animalManager');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
  const animal = await animalManager.getAllAnimals();
  res.render('home', { animal });
});

router.get('/dashboard', async (req, res) => {
  const animal = await animalManager.getAllAnimals();
  res.render('dashboard', { animal });
});

router.get('/search', isAuth, async (req, res) => {
  const animal = await animalManager.getAllAnimals();

  res.render('search', { animal });
});

router.post('/search', isAuth, async (req, res) => {
  const { location } = req.body;
  const animal = await animalManager.getAnimalByLocation(location);

  res.render('search', { animal });
});

module.exports = router;
