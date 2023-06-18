const router = require('express').Router();

const homeController = require('./controllers/homeController');
const createController = require('./controllers/cubeController');
const createAccessoryController = require('./controllers/accessoryController');
const userController = require('./controllers/userController');

router.use(homeController);
router.use('/cube', createController);
router.use('/accessory', createAccessoryController);
router.use('/user', userController);

router.get('*', (req, res) => {
  res.redirect('/404');
});

module.exports = router;
