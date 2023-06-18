const router = require('express').Router();
const gameManager = require('../managers/gameManager');
const { getErrorMessage } = require('../utils/errorHelpers');
const { getPlatformOptions } = require('../utils/managerHelper');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
  res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
  const { name, image, price, description, genre, platform } = req.body;

  try {
    await gameManager.createGame({
      name,
      image,
      price,
      description,
      genre,
      platform,
      owner: req.user._id,
    });

    res.redirect('/catalog');
  } catch (err) {
    const errorMessages = getErrorMessage(err);
    res.status(404).render('create', { errorMessages });
  }
});

router.get('/details/:gameId', async (req, res) => {
  try {
    const game = await gameManager.getGameById(req.params.gameId);
    let isOwner = false;
    let alreadyBought = false;

    if (req.user?._id == game.owner) {
      isOwner = true;
    }

    if (game.boughtBy.find((x) => x == req.user?._id)) {
      alreadyBought = true;
    }

    res.render('details', { game, isOwner, alreadyBought });
  } catch (err) {
    res.status(404).render('404');
  }
});

router.get('/buy/:gameId', isAuth, async (req, res) => {
  try {
    await gameManager.buyGame(req.params.gameId, req.user._id);
  } catch (err) {
    const errorMessages = getErrorMessage(err);
    res.status(404).render('home', { error: errorMessages });
  }
  res.redirect(`/game/details/${req.params.gameId}`);
});

router.get('/delete/:gameId', isAuth, async (req, res) => {
  const game = await gameManager.getGameById(req.params.gameId);
  try {
    if (game.owner[0].toString() !== req.user?._id) {
      res.redirect(`/game/details/${req.params.gameId}`);
    } else {
      await gameManager.deleteGame(req.params.gameId);
      res.redirect('/');
    }
  } catch (err) {
    const errorMessages = getErrorMessage(err);
    res.render('/', { error: errorMessages });
  }
});

router.get('/edit/:gameId', async (req, res) => {
  const game = await gameManager.getGameById(req.params.gameId);
  const options = getPlatformOptions(game.platform);
  res.render('edit', { game, options });
});

router.post('/edit/:gameId', async (req, res) => {
  const { name, image, price, description, genre, platform } = req.body;
  try {
    await gameManager.updateGame(req.params.gameId, {
      name,
      image,
      price,
      description,
      genre,
      platform,
    });
    res.redirect(`/game/details/${req.params.gameId}`);
  } catch (err) {}
});

module.exports = router;
