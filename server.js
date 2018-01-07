const express = require('express');
const path = require('path');
const helmet = require('helmet');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;

const server = express();

server.use(helmet());
server.disable('x-powered-by');

server.get('/', (req, res) => {
  res.sendStatus(200);
});

server.get('/test-vast', (req, res) => {
  res.set('Content-Type', 'application/xml; charset=utf-8');
  res.sendFile(path.join(__dirname, "./test-vast.xml"));
});

server.listen(port, (err) => {
  if (err) throw err
  console.log(`server start => port:${port}`);
});