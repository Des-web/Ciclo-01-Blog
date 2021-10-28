const path = require('path');
const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static(__dirname + '/src'));

app.listen(3000, function() {
    console.log('listening on 3000');
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/src/comments.html');
});

app.post('/quotes', (req, res) => {
  console.log(req.body);
});

MongoClient.connect('mongodb-connection-string', (err, client) => {
  // ... 
});