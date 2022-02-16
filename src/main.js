import { io } from 'socket.io-client';

const socket = io('http://localhost:9000');

console.log(socket)

socket.on('connect', () => {
  console.log(socket.id + ' connected')
});

socket.on('disconnect', () => {
  console.log(socket.id + ' disconnected')
});
    