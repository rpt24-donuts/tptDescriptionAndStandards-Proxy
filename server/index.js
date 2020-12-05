const express = require('express')
const app = express()
const port = 3000
// const httpProxy = require('http-proxy');
// const apiProxy = httpProxy.createProxyServer();
// const serverOne = 'http://localhost:3001',
//     ServerTwo = 'http://localhost:3002',
//     ServerThree = 'http://localhost:3003',
//     ServerFour = 'http://localhost:3004';

app.use(express.static(__dirname + '/../public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})