const express = require('express')
const app = express()
const port = 3000
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const serverOne = 'http://localhost:3001',
    ServerTwo = 'http://localhost:3002',
    ServerThree = 'http://localhost:3003',
    ServerFour = 'http://localhost:3004';

app.use(express.static(__dirname + '/../public'))

// const cors = require('cors');

// app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Content-Type", "text/html")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("X-Content-Type-Options", "nosniff")
//   next();
// });

// app.all("/app1/*", function(req, res) {
//     console.log('redirecting to Server1');
//     apiProxy.web(req, res, {target: serverOne});
// });

// app.all("/app2/*", function(req, res) {
//     console.log('redirecting to Server2');
//     apiProxy.web(req, res, {target: ServerTwo}, () => {
//       console.log('file')
//     });
// });

// app.all("/react*", function(req, res) {
//     console.log('redirecting to Server3');
//     apiProxy.web(req, res, {target: ServerThree}, () => {
//       console.log('gotten')
//     }
//     );
// });
// app.all("/app4/*", function(req, res) {
//   console.log('redirecting to Server4');
//   apiProxy.web(req, res, {target: ServerFour})
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})