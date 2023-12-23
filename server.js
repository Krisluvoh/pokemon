// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Set the port to 3000
const port = 3000;

// Set up a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
