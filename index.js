// index.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static HTML file for the calculator UI
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Express route for calculator operations
app.get('/calculate/:operation/:num1/:num2', (req, res) => {
  const { operation, num1, num2 } = req.params;
  const x = parseFloat(num1);
  const y = parseFloat(num2);

  if (isNaN(x) || isNaN(y)) {
    return res.status(400).send('Invalid input. Please provide valid numbers.');
  }

  let result;
  switch (operation) {
    case 'add':
      result = x + y;
      break;
    case 'subtract':
      result = x - y;
      break;
    case 'multiply':
      result = x * y;
      break;
    case 'divide':
      result = y !== 0 ? x / y : 'Cannot divide by zero!';
      break;
    default:
      return res.status(400).send('Invalid operation. Please choose add, subtract, multiply, or divide.');
  }

  res.send(`Result: ${result}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
