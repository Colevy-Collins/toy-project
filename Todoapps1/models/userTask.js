const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
  },
    username: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
      sparse: true,
    },
  });