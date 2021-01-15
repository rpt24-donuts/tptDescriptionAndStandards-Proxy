const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('http://54.204.140.50:3003/style.css'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/products/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/images', async (req, res)=>{
  let bundle = await axios.get('http://54.204.140.50:3003/bundle.js');
  res.send(bundle.data);
});

// app.get('/images-style', async (req, res)=>{
//   let css = await axios.get('http://54.204.140.50:3003/style.css');
//   console.log(css.data)
//   res.send(css.data);
// });

app.get('/description', async (req, res)=>{
  let bundle = await axios.get('http://18.222.237.222:3002/bundle.js');
  res.send(bundle.data);
});

app.get('/reviews', async (req, res)=>{
  let bundle = await axios.get('http://18.144.61.129:3001/bundle.js');
  res.send(bundle.data);
});

app.get('/qanda', async (req, res)=>{
  let bundle = await axios.get('http://18.223.239.5:3004/bundle.js');
  res.send(bundle.data);
});

app.listen(port);
