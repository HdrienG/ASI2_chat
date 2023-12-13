const express = require('express');
const app = express();
var http = require('http').Server(app);
app.get('/', (req, res) => 
{res.sendFile(__dirname + '/index2.html');
});
app.set("port", process.env.PORT || 3000);//Connexion port 3000
var server = http.listen(3000, () => {console.log("server is running on port", server.address().port);});

var io = require("socket.io")(http);
io.on(
    'connection', (socket) => {  
    socket.on('chat message', (msg) => {    
    io.emit('chat message', msg);  
    });});

