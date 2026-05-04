const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um Número: '));

function numeroPrimo(numero){
    if(numero <= 1){
        return false;
    }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}
function exibeResultado(numero){
    if(numeroPrimo(numero)){
        console.log(`O número ${numero} é primo.`)
    }
    else{
        console.log(`O número ${numero} não é primo`)
    }
}
exibeResultado(numero);