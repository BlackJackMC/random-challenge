const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const questionRoutes = require('./routes/index');

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());


// Routes
app.use('/', questionRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
