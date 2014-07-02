var socket = new WebSocket('ws://localhost:5000/');
socket.onmessage = function(message) {
  $('#door_state').text(message.data);
}

var buzzerOn = function() {
  $.ajax({
    type: "POST",
    url: 'https://api.spark.io/v1/devices/53ff6d065075535130561487/buzzer_on',
    data: 'access_token=792e2af48ebcc516b6ec5d28b99bfb677933fe27',
  });
}

var buzzerOff = function() {
  $.ajax({
    type: "POST",
    url: 'https://api.spark.io/v1/devices/53ff6d065075535130561487/buzzer_off',
    data: 'access_token=792e2af48ebcc516b6ec5d28b99bfb677933fe27',
  });

}
