const express = require('express');

const { serverInfo } = require('./utils/system')

const app = express();

// respond with "hello world" when a GET request is made to the homepage

app.listen(serverInfo.port,()=>{
  console.log(serverInfo.port)
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/first', function(req, res) {
  res.send('First');
});

app.get('/second', function(req, res) {
  res.send('Second');
});

app.get('/third', function(req, res) {
  res.send('Third');
});