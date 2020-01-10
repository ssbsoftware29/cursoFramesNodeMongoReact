const express = require('express');

module.exports = function(server) {
  //API Routes
  const router = express.Router();

  //tudo que vier de /api vai apsser pelo middleware *router*,
  //que é a função que vem do express.Router()
  server.use('/api', router);

  // router.route('/teste').get(function(req,res,next) {
  //   res.send('FUNCSO')
  // })

  //Montagem das rotas
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles') //Register, um método nodeRestful,
}/*Forma de passar uma informação p/ um módulo dentro do Node, para definir que /billingCycles é a url raiz
da api*/