const express = require('express');
const bodyParser = require('body-parser');
const questionRouter = require('./questionRouter.js');
const handlebars = require('express-handlebars');
const fileController = require('./fileController');


let app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  let htmlRender = fileController.readFile(__dirname + '/public/about.html');
  res.render('about', { htmlRender  : htmlRender,
                        textDemo    :   'test render'}
            );
});


app.use('/question', questionRouter);
// app.get('/style.css', (req, res) => {
//   res.sendFile(__dirname + '/public/style.css');
// });

app.listen(6969, () => {
  console.log('server is up');
});
