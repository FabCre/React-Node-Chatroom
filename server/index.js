/*
 * Require
 */
var express = require('express');
var join = require('path').join;
var Server = require('http').Server;
var socket = require('socket.io');


/*
 * Vars
 */
var app = express();
var server = Server(app);
var io = socket(server);


/*
 * Express
 */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', function(socket) {
  console.log('>> socket.io - connected');
  socket.on('send_message', function(message) {
    console.log('send_message', message);
    message.id = ++id;
    io.emit('send_message', message);
  });
});

/*
 * Server
 */
server.listen(3001, function() {
  console.log('listening on *:3001');
});
