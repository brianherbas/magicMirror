var socket = io.connect('http://localhost:8080' , { 'foceNew' : true });

socket.on('messages', function (data){
    console.log(data);
});

