//Mongoose é respondaavel pela conexão com o mongoDB
//Responsavel pelo mapeamento dos objetos para os documentos
//armazenados no mongodb
const mongoose = require('mongoose');

//Conectar com o mongoDB, recebe a URL
module.exports = mongoose.connect('mongodb://localhost/db_finance');
                //'mongodb://usuario:senha@localhost:port/db_finance

                mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
                mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor do que o limite minimo '{MIN}'";
                mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor do que o limite maximo '{MAX}'";
                mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'";