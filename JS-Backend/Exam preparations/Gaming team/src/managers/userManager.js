const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.login = async (userData) => {
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    throw new Error("Email or Password don't match");
  }

  const isValid = await bcrypt.compare(userData.password, user.password);

  if (!isValid) {
    throw new Error("Email or Password don't match");
  }

  const token = await generateToken(user);

  return token;
};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.username });

  if (user) {
    throw new Error('Username already exists');
  }

  const createdUser = await User.create(userData);

  const token = await generateToken(createdUser);

  return token;
};

async function generateToken(user) {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

  return token;
}
