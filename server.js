const express = require('express');
const app = express();
const jsxViewEngine = require('jsx-view-engine');
const pokemon = require('./models/pokemon');

// Set up jsx view engine
//app.engine('jsx', require('express-react-views').createEngine());-----------------------------
app.engine('jsx', jsxViewEngine());
//app.set('views', __dirname + '/views');-----------------------------------
app.set('views', './views');
app.set('view engine', 'jsx');

app.get('/', (req, res) => {
  res.redirect('/pokemon')
})

// Route to show all Pokemon
app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon });
});

// Dynamic route to get Pokemon image based on the number
app.get('/pokemon/:id/image', (req, res) => {
  const { id } = req.params;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  res.send(`<img src="${imgUrl}" alt="Pokemon ${id}"/>`);
});

// Show route to display the Pokemon details
app.get('/pokemon/:id', (req, res) => {
  const { id } = req.params;
  const selectedPokemon = pokemon[id];

  // Check if pokemon array has an item at the specified index
  if (selectedPokemon) {
    // const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    res.render('Show', { pokemon: selectedPokemon });
  } else {
    // Handle case where pokemon with the specified ID is not found
    res.status(404).send('Pokemon not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
