const jwt = require('../lib/jwt');
const { secret } = require('../config/config');
exports.auth = async (req, res, next) => {
  const token = req.cookies['auth'];

  if (token) {
    try {
      const user = await jwt.verify(token, secret);

      req.user = user;
      res.locals.user = user;
      res.locals.isAuthenticated = true;
      next();
    } catch (err) {
      res.clearCookie('auth');
      res.redirect('/user/login');
    }
  } else {
    next();
  }
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    res.redirect('/user/login');
  }

  next();
};
