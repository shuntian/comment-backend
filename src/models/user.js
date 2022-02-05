const mongoose = require('mongoose');
const connection = require('./connection');

const UserSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  email: String,
  password: String
});

const User = connection.model('user', UserSchema);

module.exports = User;