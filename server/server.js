const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:8000"
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '../index.html');
});

io.on('connection', (socket) => {
  console.log(socket.id + ' user connected');
});

server.listen(9000, () => {
  console.log('listening on *:9000');
});