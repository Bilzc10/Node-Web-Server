//Setup
  //Express
const express = require('express');
const app = express();
const server = require('http').Server(app);
  //Path
const path = require('path');

  //Options file - for modifying settings
var options = require("./options.json");

app.use(express.static(path.join(__dirname, options.webDir))); //Serve any files requested that exist in web directory

server.listen(options.port);

console.log("Server Started. Listening on port " + options.port);
