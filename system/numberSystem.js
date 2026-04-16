// Input do usuario
const prompt = require('prompt-sync')();
const number = [Number(prompt("Qual foi a nota?")),Number(prompt("Qual foi a nota?")),Number(prompt("Qual foi a nota?")),Number(prompt("Qual foi a nota?")),Number(prompt("Qual foi a nota?")),]
 let soma = 0;
 // Estrutura de repetição
for(i = 0; i < 5; i++){
    console.log(`A nota foi: ${number[i]}`)
    soma += number[i]
}
console.log(`A soma das notas foram: ${soma}`)