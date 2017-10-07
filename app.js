const express = require('express');
const app = express();

// Usar todo el contenido de la carpeta public
app.use(express.static(__dirname + '/public/*'));

// Página a cargar cuando se cargue el local
app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
});

// Redirigir todo al local
 app.get('/*',(req, res) =>{
   return res.redirect('/');
 });

 module.exports = app;
