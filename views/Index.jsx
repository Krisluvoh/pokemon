// views/Index.jsx
const React = require('react');

class Index extends React.Component {
  render() {
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
          {/* Add your content here */}
        </body>
      </html>
    );
  }
}

module.exports = Index;
