const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON body for POST requests
app.use(express.json());

// ----------------------
// GET: Add two numbers
// ----------------------
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Error: Please provide valid numbers 'a' and 'b'.");
  }

  res.send(`Result: ${a} + ${b} = ${a + b}`);
});

// ----------------------
// GET: Subtract
// ----------------------
app.get('/subtract', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Error: Provide valid numbers.");
  }

  res.send(`Result: ${a} - ${b} = ${a - b}`);
});

// ----------------------
// GET: Multiply
// ----------------------
app.get('/multiply', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Error: Provide valid numbers.");
  }

  res.send(`Result: ${a} × ${b} = ${a * b}`);
});

// ----------------------
// GET: Divide
// ----------------------
app.get('/divide', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Error: Provide valid numbers.");
  }

  if (b === 0) {
    return res.status(400).send("Error: Cannot divide by zero.");
  }

  res.send(`Result: ${a} ÷ ${b} = ${a / b}`);
});

// ----------------------
// POST: Add numbers using JSON body
// ----------------------
app.post('/add', (req, res) => {
  const { a, b } = req.body;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Provide valid numbers in JSON body." });
  }

  res.json({ result: a + b });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
