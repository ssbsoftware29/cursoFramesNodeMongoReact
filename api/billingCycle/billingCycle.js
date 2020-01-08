const restful = require('node-restful'); //Facilita a exposição da API restFUl para quem quiser consumir
                                          //CRUD simplificado, mapeamento, objeto documento, depende do express e do mongoose
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  //tudo que for saldo positivo
  name: { type: String, required: true},
  value: { type: Number, min: 0, required: true}
}); //com osera o armazenamento dentro do mongo

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true},
  value: { type: Number, min: 0, required: true},
  status: { type: String, required: false, uppercase: true,
  enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
  /*Antes de enviar as informações o mongoose
  testa os status */
});

const billingCyclesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  month: {type: Number, min: 1, max: 12, required: true},
  year: {type: Number, min: 1970, max: 2100,required: true},
  credits: [creditSchema],
  debts: [debtSchema]
});

module.exports = restful.model('BillingCycle', billingCyclesSchema);