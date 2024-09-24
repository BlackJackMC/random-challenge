const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// POST /: Add a new question
router.post('/', async (req, res) => {
  const { question, user, date } = req.body;
  if (!question || !user || !date) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    const newQuestion = new Question({ question, user, date, vote: 0 });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error saving question', error });
  }
});

// GET /: Fetch a random question
router.get('/', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 1 } }]);
    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found' });
    }
    res.status(200).json(questions[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching question', error });
  }
});

module.exports = router;
