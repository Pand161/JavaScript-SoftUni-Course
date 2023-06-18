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
  email: {
    required: [true, 'Email is required'],
    minLength: [10, 'Email should be atleast 10 charcters long'],
    type: String,
  },
  password: {
    required: true,
    minLength: [4, 'Password Should be atleast 4 characters long'],
    type: String,
  },
});

userSchema.virtual('rePassword').set(function (value) {
  if (this.password !== value) {
    throw new Error("Passwords don't match");
  }
});

userSchema.pre('save', async function () {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
