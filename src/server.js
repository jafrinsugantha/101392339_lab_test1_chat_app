// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// API Routes (Create separate route files for better organization)
app.post('/api/signup', async (req, res) => {
  // Handle user signup (Create a new user in the database)
  // Respond with success or error message
});

app.post('/api/login', async (req, res) => {
  // Handle user login (Authenticate user and generate JWT token)
  // Respond with user data and token or error message
});

// Add more routes for chat, room, etc.

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
