const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is requried'],
    minLength: [5, 'Username must be atleast 5 characters long'],
    match: [/^[a-zA-Z0-9]+$/, 'Invalid characters in username'],
    unique: {
      value: true,
      message: 'Username already exists',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is requried'],
    minLength: [8, 'Password must be atleast 8 characters long'],
    match: [/^[a-zA-Z0-9]+$/, 'Invalid characters in password'],
  },
});

userSchema.virtual('repeatPassword').set(function (value) {
  if (value !== this.password) {
    throw new Error("Passwords don't match");
  }
});

userSchema.pre('save', async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
