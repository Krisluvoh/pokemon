// Import the express module
// server.js

const express = require('express');
const app = express();
const pokemon = require('./pokemon');

const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.json(pokemon); // Display the Pokemon data as JSON
});

// Dynamic route to get Pokemon image based on the number
app.get('/pokemon/:id', (req, res) => {
  const { id } = req.params;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  res.send(`<img src="${imgUrl}" alt="Pokemon ${id}"/>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
