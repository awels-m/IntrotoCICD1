// index.js
const app = require('./app');   // import the app from app.js
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
