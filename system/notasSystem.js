const prompt = require('prompt-sync')();
const alunos = [];
const notas = [];
let option = '';
// Menu interativo 
while(option !== 3){
console.log("------MENU------")
console.log('1. Cadastrar')
console.log('2. Listar')
console.log('3. Sair')
option = prompt('Digite o campo desejado: ')
// CADASTRO DO USUARIO
if(option === '1'){
    const nome = prompt("Digite o nome do aluno: ")
    const nota = Number(prompt(`Digite a nota de ${nome}: `))
    alunos.push(nome)
    notas.push(nota)
    console.log(`Aluno cadastrado com sucesso!`)

    // Listando Alunos
}else if(option === '2'){
   if(alunos.length == 0){
    console.log("Não existe nenhum aluno cadastrado!")
   }else{
    console.log('---Lista de Alunos---')
    for(i = 0; i < alunos.length;i++){
    console.log(`Aluno: ${alunos[i]} | Nota: ${notas[i]} | Situação: ${notas[i] >= 7 ? 'Aprovado' : 'Reprovado'} `)       
            }
        }
    }else{
        console.log('Obrigado por nós visitar!')
        break;
    }
}


