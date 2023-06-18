const router = require('express').Router();
const animalManager = require('../managers/animalManager');
const { isAuth } = require('../middlewares/authMiddleware');
const {
  getErrorMessage,
  errorHandler,
  extractErrorMessages,
} = require('../utils/errorHelpers');

router.get('/create', isAuth, async (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  const { name, years, kind, imageUrl, need, location, description } = req.body;

  try {
    await animalManager.createAnimal({
      name,
      years,
      kind,
      imageUrl,
      need,
      location,
      description,
      owner: req.user._id,
    });

    res.redirect('/dashboard');
  } catch (err) {
    const error = extractErrorMessages(err)[0];
    res.status(404).render('create', { error });
  }
});

router.get('/details/:animalId', async (req, res) => {
  const animal = await animalManager.getAnimalById(req.params.animalId);
  let isOwner = false;
  let isDonated = false;

  if (animal.owner == req.user?._id) {
    isOwner = true;
  } else if (animal.donations.find((x) => x == req.user?._id)) {
    isDonated = true;
  }

  res.render('details', { animal, isOwner, isDonated });
});

router.get('/donate/:animalId', isAuth, async (req, res) => {
  await animalManager.donateAnimal(req.params.animalId, req.user?._id);

  res.redirect(`/animal/details/${req.params.animalId}`);
});

router.get('/delete/:animalId', isAuth, async (req, res) => {
  try {
    const animal = await animalManager.getAnimalById(req.params.animalId);

    if (animal.owner != req.user?._id) {
      res.redirect('/404');
    }

    await animalManager.deleteAnimal(req.params.animalId);
    res.redirect('/dashboard');
  } catch (err) {
    const error = getErrorMessage(err);
    res.render('home', { error });
  }
});

router.get('/edit/:animalId', isAuth, async (req, res) => {
  const animal = await animalManager.getAnimalById(req.params.animalId);

  if (animal.owner != req.user?._id) {
    res.redirect('/404');
  }

  res.render('edit', { animal });
});

router.post('/edit/:animalId', async (req, res) => {
  const { name, years, kind, imageUrl, need, location, description } = req.body;
  const animal = await animalManager.getAnimalById(req.params.animalId);
  try {
    if (name.length < 2) {
      throw new Error('Minimum length for name is 2 characters');
    }

    if (years < 1 || years > 100) {
      throw new Error('Years should be between 1 and 100');
    }

    if (kind.length < 3) {
      throw new Error('Minimum length for kind is 3 characters');
    }

    if (!/^(http|https):\/\//.test(imageUrl)) {
      throw new Error('imageUrl should start with http or https');
    }

    if (need.length < 3 || need.length > 20) {
      throw new Error('Needs length should be between 3 and 20 characters');
    }

    if (location.length < 5 || location.length > 15) {
      throw new Error('Location length should be between 5 and 15 characters');
    }

    if (description.length < 5 || description.length > 50) {
      throw new Error(
        'Description length should be between 5 and 50 characters'
      );
    }

    await animalManager.updateAnimal(req.params.animalId, {
      name,
      years,
      kind,
      imageUrl,
      need,
      location,
      description,
    });

    res.redirect(`/animal/details/${req.params.animalId}`);
  } catch (err) {
    const error = getErrorMessage(err);
    res.render('edit', { error, animal });
  }
});

module.exports = router;
