const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/products/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/images', async (req, res)=>{
  axios.get('http://54.204.140.50:3003/bundle.js')
  .then(bundle => {
    res.send(bundle.data);
  })
  .catch (err => {
    console.log(err);
    res.end();
  })
});

app.get('/description', async (req, res)=>{
  axios.get('http://18.222.237.222:3002/bundle.js')
  .then(bundle => {
    res.send(bundle.data);
  })
  .catch (err => {
    console.log(err);
    res.end();
  })
});

app.get('/reviews', async (req, res)=>{
  axios.get('http://18.144.61.129:3001/bundle.js')
  .then(bundle => {
    res.send(bundle.data);
  })
  .catch (err => {
    console.log(err);
    res.end();
  })
});

app.get('/qanda', async (req, res)=>{
  axios.get('http://18.223.239.5:3004/bundle.js')
  .then(bundle => {
    res.send(bundle.data);
  })
  .catch (err => {
    console.log(err);
    res.end();
  })
});

app.listen(port);
