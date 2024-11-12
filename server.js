// Import required dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// store result in memory
let history = [];

//  handle GET requests to "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Sum API! Use /add to calculate sums and /history to view past sums.');
});

// POST /add
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  // Validate finite numbers
  if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
    return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers' });
  }

  // Calculate sum
  const sum = num1 + num2;

  // Store the result
  history.push({ num1, num2, sum });

  // Send back the result
  res.json({ sum });
});

// GET /history
app.get('/history', (req, res) => {
  res.json(history);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
