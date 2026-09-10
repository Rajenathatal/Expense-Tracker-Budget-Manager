const express = require('express');
const cors = require('cors');

const app = express();

// Middleware Configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Test Route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Expense Tracker Backend API is running successfully!',
    timestamp: new Date().toISOString()
  });
});

// Health Test Route
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    server: 'Express.js',
    sprint: 'Sprint 11 - Backend Foundation Setup'
  });
});

module.exports = app;