// views/Show.jsx
const React = require('react');

class Show extends React.Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { pokemon } = this.props;
    const myStyle = {
      color: '#ffffff',
      backgroundColor: '#000000',
    };

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Gotta Catch 'Em All</title>
        </head>
        <body style={myStyle}>
          <h1>Gotta Catch 'Em All</h1>
          <h2>{this.capitalizeFirstLetter(pokemon.name)}</h2>
          <img src={pokemon.img} alt={pokemon.name} />
          <a href="/">Back</a>
        </body>
      </html>
    );
  }
}

module.exports = Show;
