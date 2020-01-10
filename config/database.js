//Mongoose é respondaavel pela conexão com o mongoDB
//Responsavel pelo mapeamento dos objetos para os documentos
//armazenados no mongodb
const mongoose = require('mongoose');

//Conectar com o mongoDB, recebe a URL
module.exports = mongoose.connect('mongodb://localhost/db_finance');
                //'mongodb://usuario:senha@localhost:port/db_finance