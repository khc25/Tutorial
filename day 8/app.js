const express = require('express');
const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log('a user go out');
    })
})


server.listen(8090)
