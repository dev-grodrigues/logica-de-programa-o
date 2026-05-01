const prompt = require('prompt-sync')();

let valor = Number(prompt("Digite um Numero Positivo ou Negativo: "));
function verificaValor(valor){
    if(valor < 0){
        return false;
    }else{
        return true
    }
}
console.log(verificaValor(valor))