var express = require('express');
var app = express();
app.get('/peticion/saludo', function () {});
app.get('/', function (req, res) {
	  res.send('Hola Mundo');
});
var server = app.listen(3000, function () {
	  console.log('Servidor ejecutandose en localhost:3000');
});
