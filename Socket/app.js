const http = require('http');
const express = require('express');
const Socket = require('socket.io');

let app = express();

app.use(express.static(__dirname + '/public'));


let server = http.createServer(app);
let io = Socket(server);
let userList = [];

io.on("connection", (socket) => {
  console.log(socket.id + "client is connected");
  socket.emit('userConnect', "Your connect is success");

  io.emit("newUserConnect", `${socket.id} is connected`);

  socket.broadcast.emit("broadCast", { user: socket.id, message: "Hello" });

  socket.on("createUser", (user) => {
    userList.push({ username : user.username, socketId : socket.id });
    console.log(userList);
  });

  socket.on("sendMessage", (message) => {
    let userSocket = userList.find( x => x.username === message.username);
    socket.to(userSocket.socketId).emit("receiveMessage", message);
  });
});

server.listen(6969, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('server  is up');
  };
});
