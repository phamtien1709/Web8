const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.send('About me');
});

// app.get('/style.css', (req, res) => {
//   res.sendFile(__dirname + '/public/style.css');
// });

app.listen(6969, () => {
  console.log('server is up');
});
