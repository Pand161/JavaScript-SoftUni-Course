const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const photoController = require('./controllers/photoController');

router.use(homeController);
router.use('/user', userController);
router.use('/photo', photoController);

router.get('*', (req, res) => {
  res.render('404');
});
module.exports = router;
