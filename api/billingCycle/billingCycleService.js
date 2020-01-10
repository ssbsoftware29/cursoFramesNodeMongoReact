const BillingCycle = require('./billingCycle');

/* COM APENAS UMA LINHA DE CÓDIGO O nodeRestful vai criar uma api rest usando o padrão Rest para o objeto
BillingCycles, sem necessidade de fazer manualmente*/
BillingCycle.methods(['get', 'post', 'put', 'delete'])  //methods, vai criar a api rest baseado
                      // em padrão Rest, em cima dos metodos do Http, definidos em methods ali mesmo

BillingCycle.updateOptions({new:true, runValidators:true});

BillingCycle.route('count', function(req, res, next) {
  BillingCycle.count(function(error, value) {
    if (error) {
      res.status(500).json({errors: [error]});
    }
  }); // parte do mongoose
});

module.exports = BillingCycle;

                    //Integração com os dados do mongoose e também
                    //com os metodos de navegação do express