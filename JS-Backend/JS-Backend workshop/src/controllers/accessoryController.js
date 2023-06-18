const router = require('express').Router();
const accessoryManager = require('../managers/accessoryManagers');
const cubeManager = require('../managers/cubeManagers');

router.get('/create', (req, res) => {
  res.render('./accessory/createAccessory');
});

router.post('/create', async (req, res) => {
  const { name, description, imageUrl } = req.body;

  await accessoryManager.createAccessory({
    name,
    description,
    imageUrl,
  });
  res.redirect('/');
});

router.get('/:cubeId/attach', async (req, res) => {
  const cube = await cubeManager.getCubeById(req.params.cubeId).lean();

  if (!cube) {
    res.redirect('/404');
  }

  const accessory = await accessoryManager.getAvailable(cube.accessories);

  const hasAccessory = accessory.length > 0;

  res.render('./accessory/attachAccessory', { cube, accessory, hasAccessory });
});

router.post('/:cubeId/attach', async (req, res) => {
  const { accessory } = req.body;
  const cubeId = req.params.cubeId;

  await cubeManager.attachAccessory(cubeId, accessory);
  res.redirect(`/cube/${req.params.cubeId}/details`);
});

module.exports = router;
