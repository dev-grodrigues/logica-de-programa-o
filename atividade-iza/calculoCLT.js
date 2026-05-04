const prompt = require('prompt-sync')();
let nome = prompt(`Digite seu Nome: `)
let horasTrabalhadas = Number(prompt('Digite suas Horas Trabalhadas: '))
let valorHora = Number(prompt("Digite o Valor da sua Hora: "))

function calculaSalario(horasTrabalhadas,valorHora){
    let salarioBruto = horasTrabalhadas * valorHora
    let adicional = 200
    if(salarioBruto < 2000){
        return salarioBruto + adicional
    }
    console.log(`Olá ${nome}
O seu salário é:R$ ${salarioBruto}`)
}
calculaSalario(horasTrabalhadas, valorHora)