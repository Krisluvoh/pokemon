const express = require('express');
const app = express();
const pokemon = require('./pokemon');

// Set up jsx view engine
app.engine('jsx', require('express-react-views').createEngine());
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

// Route to show all Pokemon
app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon });
});

// Dynamic route to get Pokemon image based on the number
app.get('/pokemon/:id', (req, res) => {
  const { id } = req.params;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  res.send(`<img src="${imgUrl}" alt="Pokemon ${id}"/>`);
});

// Show route to display the ID
app.get('/pokemon/:id', (req, res) => {
  res.send(req.params.id);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
