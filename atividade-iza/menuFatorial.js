const prompt = require('prompt-sync')();

let numero = 0;
let option = 0;

function menu(){
console.log(`======= MENU ========
1. Soma de 0 ATÉ N
2. Fatorial de N
0. Sair`)
option = prompt("Digite uma Opção: ")
}

function somaNumero(numero){
 numero = Number(prompt('Digite um numero inteiro positivo: '))
 let soma = 0;
 for(i = 0; i <= numero;i++){
    soma += i;
 }
 console.log(`Soma de 0 até ${numero} = ${soma}`)
 return
}

function fatorialN(numero){
numero = Number(prompt('Digite um numero inteiro positivo: '))
let fatorial = 1;
    for(i = 1; i <= numero; i++){
        fatorial *= i;
    }
    console.log(`Fatorial de ${numero} = ${fatorial}`)
}
function sair(){
    console.log("Saindo do programa...")

}

while(option !== "2"){
    menu()
    switch(option){
        case '1':
            somaNumero();
            break;
        case '2':
            fatorialN();
            break;
        case '0':
            sair();
            break;
        default:
            console.log("Opção invalida!")
            break;
    }
}