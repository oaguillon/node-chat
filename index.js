var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection',function(socket){
	console.log('Un usuario conectado');

  socket.on('chat message', function(msg){
  	console.log('mensage: '+msg);
    io.emit('chat message', msg);
  });

	socket.on('disconnect',function(){
		console.log("usuario desconectado");
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});