const prompt = require('prompt-sync')();
const nome = [prompt("Qual nome do aluno? "),prompt("Qual nome do aluno? "),prompt("Qual nome do aluno? "),prompt("Qual nome do aluno? "),prompt("Qual nome do aluno? "),]
for(i = 0; i < nome.length; i++){
  let nomes = nome[i]
console.log(`Olá, ${nome[i].charAt(0).toUpperCase() + nome[i].slice(1)}`)
}
