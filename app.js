//Setup
  //Express
const express = require('express');
const app = express();
const server = require('http').Server(app);

var options = require("./options.json");

app.use(express.static(path.join(__dirname, options.webDir)));
