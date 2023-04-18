const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: new Date().toISOString().slice(0, 10)
  },
  dateNum: {
    type : Date
  },
  tag: {
    type: String,
    default: "Standard Task"
  },
  file: {
    type: Buffer
  },
},
{
  collection : 'POSTS'
})
module.exports = mongoose.model('TodoTask',todoTaskSchema);

// https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039