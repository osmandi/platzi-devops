const http = require('http');
const app = require('./app');

// Puerto a escuchar
http.createServer(app).listen(3000);

// Mensaje de la consola al correr el servidor
console.log('Im running');
