// views/Index.jsx
const React = require('react');

class Index extends React.Component {
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
          <title>See All The Pokemon!</title>
        </head>
        <body style={myStyle}>
          <h1>See All The Pokemon!</h1>
          <ul>
            {pokemon.map((poke, index) => (
              <li key={index}>
                <a href={`/pokemon/${index}`}>
                  {this.capitalizeFirstLetter(poke.name)}
                </a>
              </li>
            ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Index;
