const port = 3003;

//bodyParser é um Middleware
const bodyParser = require('body-parser'); // Faz a interpretação do corpo da requisição
const express = require('express');
const server = express();

//Formulario, as informações são interpretadas
server.use(bodyParser.urlencoded( { extended: true } ));
server.use(bodyParser.json()); // Dentro do corpo da req se a info for um JSON
                              // o bodyParser vai transformar a info para ser usada 
                              //dentro da aplicação backend

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`);
});

module.exports = server