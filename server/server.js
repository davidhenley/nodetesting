const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {name: 'Ryan Moses', age: 31},
    {name: 'Kaylin Long', age: 28},
    {name: 'David Henley', age: 32},
  ]);
});

app.listen(3000, () => {
  console.log('Magic happens on port 3000');
});

module.exports.app = app;
