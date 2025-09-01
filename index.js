// index.js
const express = require('express');      // bring in express
const app = express();                   // create an express app
const port = process.env.PORT || 3000;   // respect PORT if provided, else 3000

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

