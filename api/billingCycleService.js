const BillingCycle = require('./billingCycle/billingCycle');

/* COM APENAS UMA LINHA DE CÓDIGO O nodeRestful vai criar uma api rest usando o padrão Rest para o objeto
BillingCycles, sem necessidade de fazer manualmente*/
BillingCycle.methods(['get', 'post', 'put', 'delete'])  //methods, vai criar a api rest baseado
                      // em padrão Rest, em cima dos metodos do Http, definidos em methods ali mesmo

                    module.exports = BillingCycle;

                    //Integração com os dados do mongoose e também
                    //com os metodos de navegação do express