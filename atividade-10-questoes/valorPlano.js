const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite seu nome, seu tipo e seu faturamento em ordem: ", function(input){
    const cliente = input.split(' ')
    const [cli, tipo, fat] = cliente
    //
    let valorPlano;
    let categoria = tipo
    //
    function usuarioTipo(cliente, valorPlano, categoria){
    if(tipo === "PF"){
        return{ valorPlano: 29.90,
         categoria: "Pessoa Fisica"
        }
    }else if(tipo === "PJ"){
        if(fat < 10000){
            return { valorPlano: 99, 
            categoria: "PJ Basic"}
        }else if(fat >= 10000 && fat < 50000){
            return { 
                valorPlano: 199,
               categoria: "PJ Plus"
            }
        }else{
           return{
          valorPlano: 399,
            categoria: "PJ Premium"
           }
        }
    }else{
        return categoria = 'Tipo de cliente inválido', valorPlano = 0  
     }
    }
    const resultado = usuarioTipo()
    console.log(`Nome do cliente: ${cli}`)
    console.log(`Categoria: ${resultado.categoria}`)
    console.log(`Valor do Plano: R$ ${resultado.valorPlano}`)
    rl.close()
});
