var io = require('socket.io');

module.exports = function (server) {
  var socketServer = io(server);

  socketServer.on('connection', function(socket) {
    console.log('someone is connected');
  });
};
