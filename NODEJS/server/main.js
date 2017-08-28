var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);  

app.use(express.static('public'));

io.on('connection',function(socket)
{
    console.log('Alguien se conecto al servidor');
    socket.emit('messages', {text : "Se ha conectado al servidor",});
})


server.listen(8080, function() {  
    console.log('Servidor corriendo en http://localhost:8080');
});

