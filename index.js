require('newrelic');
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

app.get('/images', async (req, res) => {
  axios.get('http://184.72.22.149:3003/bundle.js')
    .then((bundle) => {
      res.send(bundle.data);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.get('/description', async (req, res) => {
  axios.get('http://3.139.104.53:3002/bundle.js')
    .then((bundle) => {
      res.send(bundle.data);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.get('/reviews', async (req, res) => {
  axios.get('http://18.191.145.140:3001/bundle.js')
    .then((bundle) => {
      res.send(bundle.data);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.get('/qanda', async (req, res) => {
  axios.get('http://18.223.239.5:3004/bundle.js')
    .then((bundle) => {
      res.send(bundle.data);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.listen(port);
