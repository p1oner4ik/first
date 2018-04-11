var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.use(express.static(__dirname + "/public"));

// Проверка пароля
io.on('connection', function(socket){

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('nickname', function(msg){
    if (msg === "") {
      msg = "Anonim";
    }
    io.emit('nickname', msg);
  });
  socket.on('chat avaSrc', function(msg){
    console.log(msg)
    io.emit('chat avaSrc', msg);
  });
});


http.listen(port, function(){
  console.log('listening on port: ' + port);
});
