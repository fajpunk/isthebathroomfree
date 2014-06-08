var socket = new WebSocket('ws://localhost:5000/');
socket.onmessage = function(message) {
  $('#door_state').text(message.data);
}
