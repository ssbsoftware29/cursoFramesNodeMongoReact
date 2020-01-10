const server = require('./config/server');
require('./config/database');
require('./config/routes')(server); //Se tornou uma função
//onde é passado por parâmetro o server