const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const questionRoutes = require('./routes/index');

dotenv.config();
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(helmet());

// API Key Middleware
app.post("*", (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden. Invalid API key.' });
  }
});

// Routes
app.use('/', questionRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
