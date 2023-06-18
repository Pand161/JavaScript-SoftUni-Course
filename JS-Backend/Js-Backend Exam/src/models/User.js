const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    minLength: [10, 'Email should be atleast 10 characters'],
  },
  password: {
    required: true,
    type: String,
    minLength: [4, 'Password should be atleast 4 characters'],
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
