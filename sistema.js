const prompt = require('prompt-sync')();
const nome = [prompt("Qual seu nome? "),prompt("Qual seu nome? "),prompt("Qual seu nome? "),prompt("Qual seu nome? "),prompt("Qual seu nome? "),]
for(i = 0; i < 5; i++){
  let nomes = nome[i]
console.log(`Olá, ${nome[i].charAt(0).toUpperCase() + nome[i].slice(1)}`)
}
