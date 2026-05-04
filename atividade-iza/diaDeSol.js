const prompt = require('prompt-sync')();

let alturaPessoa = parseFloat(prompt(`Digite sua Altura: `))
let sombraPessoa = parseFloat(prompt(`Digite a sua sombra: `))
let sombraPredio = parseFloat(prompt(`Digite a sombra do Predio`))

function calculaSombra(alturaPessoa, sombraPessoa, sombraPredio){
    return (alturaPessoa * sombraPredio) / sombraPessoa;
}
let alturaPredio = calculaSombra(alturaPessoa, sombraPessoa, sombraPredio)
console.log(`A altura do predio é ${alturaPredio.toFixed(2)}m`)