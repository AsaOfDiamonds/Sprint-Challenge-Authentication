const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

// let's make sure we are connected
server.get('/', (req, res) => {
  res.send('sanity check');
});

module.exports = {
  server,
};
