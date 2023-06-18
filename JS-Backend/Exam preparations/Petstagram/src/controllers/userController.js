const router = require('express').Router();
const userManager = require('../managers/userManager');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/login', (req, res) => {
  res.render('./user/login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await userManager.login({ username, password });

    res.cookie('token', token);

    res.redirect('/');
  } catch (err) {
    res.render('./user/login', { error: getErrorMessage(err) });
  }
});

router.get('/register', (req, res) => {
  res.render('./user/register');
});

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, rePassword } = req.body;

    const token = await userManager.register({
      username,
      email,
      password,
      rePassword,
    });
    res.cookie('token', token);

    res.redirect('/');
  } catch (err) {
    const firstErrorMessage = getErrorMessage(err);
    res.render('./user/register', { error: firstErrorMessage });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;
