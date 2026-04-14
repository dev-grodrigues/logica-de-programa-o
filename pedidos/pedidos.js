const prompt = require('prompt-sync')();
let pedidos = [];
let option = '';

while(option !== "5"){
console.log('\n====================');
console.log('SISTEMA DE GESTÃO DE PEDIDOS');
console.log('[1] Cadastrar Pedido.');
console.log('[2] Listar Pedidos.');
console.log('[3] Resumo Gerencial.');
console.log('[4] Buscar Pedido.');
console.log('[5] Sair.');
console.log('====================');
option = prompt('Selecione uma Opção: ');
// CADASTRO DE PEDIDO
if(option == "1"){
    let pedido = {
    id: prompt('ID do produto:  '),
    produto: prompt('Produto: '),
     quantidade: prompt('Quantidade Desejada: '),
    setor: prompt('Setor do Produto: '),
    prazo: prompt('Prazo: '),
    }
    pedidos.push(pedido)
    console.log('\nPedido Cadastrado!')
    // LISTA DE PEDIDOS
}else if(option == "2"){
    if(pedidos.length === 0){
        console.log('Você não tem nenhum pedido cadastrado!')
    }else{
        for(let pedido of pedidos){
            let prioridade = "";
            if(pedido.prazo <= 2){
                prioridade = "URGENTE"
            }else if(pedido.prazo <= 5){
                prioridade = "ALTA"
            }else if(pedido.prazo <= 10){
                prioridade = "MEDIA"
            }else{
                prioridade = "Baixa"
            }
            console.log(`${pedido.id} | ${pedido.produto} | Qtd: ${pedido.quantidade} | ${pedido.setor} | Prazo: ${pedido.prazo} | ${prioridade}`)
        } 
    }  // RESUMO GERENCIAL
}else if(option == "3"){
    let pedidosTotal = pedidos.length;
    let totalItem = 0;
    let urgentes = 0;

    for(let pedido of pedidos){
        // Somando
        totalItem += pedido.quantidade;
        // Quantidade de Urgentes
        if(pedido.prazo <= 2){
            urgentes++;
        }
    }
}else if(option == "4"){

}
}