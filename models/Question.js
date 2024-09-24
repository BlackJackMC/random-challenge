const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, required: true },
  vote: { type: Number, default: 0 },
});

module.exports = mongoose.model('Question', questionSchema, 'question');
