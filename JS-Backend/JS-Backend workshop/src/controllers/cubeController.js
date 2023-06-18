const router = require('express').Router();
const cubeManager = require('../managers/cubeManagers');
const { getDifficultyOptions } = require('../utils/managerHelper');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/create', isAuth, (req, res) => {
  res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner: req.user._id,
  });
  res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
  const cube = await cubeManager.getCubeById(req.params.cubeId).lean();

  if (!cube) {
    res.redirect('/404');
  }

  const isOwner = req.user?._id == cube.owner;

  res.render('details', { cube, isOwner });
});

router.get('/:cubeId/edit', isAuth, async (req, res) => {
  const cube = await cubeManager.getCubeById(req.params.cubeId).lean();

  if (!req.user?._id == cube.owner) {
    res.redirect('/404');
  }

  const options = getDifficultyOptions(cube.difficultyLevel);

  res.render('edit', { cube, options });
});

router.post('/:cubeId/edit', isAuth, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeManager.update(req.params.cubeId, {
    name,
    description,
    imageUrl,
    difficultyLevel,
  });

  res.redirect(`/cube/${req.params.cubeId}/details`);
});

router.get('/:cubeId/delete', isAuth, async (req, res) => {
  const cube = await cubeManager.getCubeById(req.params.cubeId).lean();

  if (!req.user?._id == cube.owner) {
    res.redirect('/404');
  }

  const options = getDifficultyOptions(cube.difficultyLevel);

  res.render('delete', { cube, options });
});

router.post('/:cubeId/delete', isAuth, async (req, res) => {
  await cubeManager.deleteById(req.params.cubeId);

  res.redirect('/');
});

module.exports = router;
