const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  userID: {
    type: String,
    sparse: true,
  },
    username: {
      type: String,
      sparse: true,
    },
    email: {
      type: String,
      sparse: true,
    },
    password: {
      type: String,
      sparse: true,
    },
  },
  {
    collection : 'users'
  });
  module.exports = mongoose.model('User',userSchema);