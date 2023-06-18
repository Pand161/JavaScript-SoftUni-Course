const router = require('express').Router();
const userManager = require('../managers/userManager');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/register', (req, res) => {
  res.render('./auth/register');
});

router.post('/register', async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  try {
    await userManager.register({ username, password, repeatPassword });

    res.redirect('/user/login');
  } catch (err) {
    const firstErrorMessage = extractErrorMessages(err);
    res
      .status(404)
      .render('./auth/register', { errorMessage: firstErrorMessage });
  }
});

router.get('/login', (req, res) => {
  res.render('./auth/login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const token = await userManager.login(username, password);

  res.cookie('auth', token, { httpOnly: true });
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
});

module.exports = router;
