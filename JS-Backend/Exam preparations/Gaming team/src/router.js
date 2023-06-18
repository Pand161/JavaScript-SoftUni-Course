const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');

router.use(homeController);
router.use('/user', userController);
router.use('/game', gameController);

router.get('*', (req, res) => {
  res.render('404');
});
module.exports = router;
