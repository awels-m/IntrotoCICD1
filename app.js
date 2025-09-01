// app.js
const express = require('express');
const app = express();

// Basic routes
app.get('/', (req, res) => {
  res.send('Hello Dr. Muogbo! CI · CD ');
});

// A health route that's nice for uptime checks and tests
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;

