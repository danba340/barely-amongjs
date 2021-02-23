const app = require('express')();

const http = require('http').Server(app);

const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080'],
  },
});

io.on('connection', (socket) => {
  const room = socket.handshake.query.room;
  console.log(room);
  socket.join(room);
  io.to(room).emit('playerJoined');

  console.log('player connected');

  socket.on('disconnect', () => {
    console.log('player disconnected');
  });

  socket.on('move', ({ x, y }) => {
    socket.broadcast.emit('move', { x, y });
  });
  socket.on('moveEnd', () => {
    socket.broadcast.emit('moveEnd');
  });
});

http.listen(3000, () => {
  console.log('server listening on localhost:3000');
});
