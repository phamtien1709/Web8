const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
  console.log(req.query);
  res.render('addQuestion');
});

Router.post('/', (req, res) => {
  console.log('post question');
  console.log(req.body);
});

Router.get('/:id', (req, res) => {
  console.log(req.params);
});

Router.get('/addQuestion', (req, res) => {
  res.redirect('/');
});

Router.get('/getQuestion', (req, res) => {
  res.send('Get question');
});

module.exports = Router;
