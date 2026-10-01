const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Load environment variables from .env
dotenv.config();

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
