const prompt = require('prompt-sync')();

let saldo = 1000
const extrato = []
let qtd_depositos = 0; let qtd_saques = 0; let total_depositado = 0; let total_sacado = 0; let option = 0;


  function menu(){
console.log(`
    ====== CAIXA ELETRONICO =======\n
    1- Consultar Saldo
    2- Depositar
    3- Sacar
    4- Ver Extrato
    5- Sair
`
 );
option = prompt("Escolha uma Opção: ");
}
function consultaSaldo(){
    console.log(`Saldo atual: ${saldo.toFixed(2)}`)
}
function depositaSaldo(){
    let valor = Number(prompt(`Digite o valor do deposito:`));
    if(valor > 0) {
         saldo += valor
        extrato.push(`Deposito: + R$ ${saldo.toFixed(2)} `)

        qtd_depositos++

        total_depositado += valor;
        console.log("Deposito efetuado com Sucesso")
    }else{
        return "Não há como depositar esse valor, Tente novamente!"
    }
}
function sacaSaldo(){
    valor = Number(prompt(`Digite o valor do saque: `));
    if(valor <= 0){
        console.log("Valor invalido")
        return;
    }if(valor > saldo){
        console.log("Saldo insuficiente")
        return;
    }
    saldo -= valor;
    extrato.push(`Saque: -R$ ${valor.toFixed(2)}`)
    qtd_saques++;
    total_sacado+= valor;
    console.log("Saque realizado com sucesso");
}
function verExtrato(){
    console.log("==== EXTRATO ====");
    if(extrato.length === 0){
        console.log("Não foram realizadas movimentações")
    }else{
        extrato.forEach(qtd => console.log(qtd));
    }
    console.log(`Saldo atual ${saldo.toFixed(2)}`)
}
function sair(){
    console.log(`Saldo final: R$ ${saldo.toFixed(2)}`)
    console.log(`Quantidade de depositos ${qtd_depositos}`)
    console.log(`Quantidade de Saques ${qtd_saques}`)
    console.log(`Valor Total Depositado ${total_depositado}`)
    console.log(`Valor Total Sacado ${total_sacado}`)
}
while(option !== "5"){
    menu()
    switch(option){
        case '1':
            consultaSaldo();
            break;
        case '2':
            depositaSaldo();
            break;
        case '3':
            sacaSaldo();
            break;
        case '4':
            verExtrato();
            break;
        case '5':
            sair();
            break;
        default:
            console.log("Opção invalida!")
            break;
    }
}
