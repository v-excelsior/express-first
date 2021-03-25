const express = require('express');

const { serverInfo } = require('./utils/system')

const app = express();

// respond with "hello world" when a GET request is made to the homepage

app.listen(serverInfo.port,()=>{
  console.log(serverInfo.port)
})

app.get('/first', function(req, res) {
  res.send('First');
});

app.get('/second', function(req, res) {
  res.send('Second');
});