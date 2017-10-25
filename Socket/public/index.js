$(document).ready(function () {
  var buttonConnect = document.querySelector(".button_connect");
  var usernamInput = document.querySelector(".username");
  var buttonSendMessage = document.querySelector(".button_send_message");
  var userToSend = document.querySelector(".to_user");
  var messageToUser = document.querySelector(".message_to_user");
  var messageChat = document.querySelector(".messageChat");
  var socket;

  buttonConnect.addEventListener("click", function() {
    const socket = io();

    socket.emit("createUser", null);

    socket.on("userConnect", (data) => {
      console.log(data);
      document.querySelector(".status").innerHTML = data;
    });

    socket.on("newUserConnect", (data) => {
      document.querySelector(".user_notification").innerHTML = data;
    });

    socket.on("broadCast", (data) => {
      document.querySelector(".user_id").innerHTML = data.user;
      document.querySelector(".user_message").innerHTML = data.message;
    });

    socket.on("connect", () => {
      socket.on("receiveMessage", (message) {
        messageChat.innerHTML += `<div>${message.username} : ${message.content} </div>`;
      });
    });
  });
  buttonSendMessage.addEventListener("click", function(e) {
    var message = {
      username : userToSend.value,
      content : messageToUser.value
    }
    socket.emit("sendMessage", message);
  })

})
