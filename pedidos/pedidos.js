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
    id: Number(prompt('ID do produto:  ')),
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
    const setores = {};
    let setorTop = 0;
    for(let pedido of pedidos){
        // Somando
        totalItem += Number(pedido.quantidade);
        // Quantidade de Urgentes
        if(pedido.prazo <= 2){
            urgentes++;
        }
pedidos.forEach(p => {
    setores[p.setor] = (setores[p.setor] || 0) + 1;
});
 setorTop = Object.entries(setores).sort((a, b) => b[1] - a[1])[0][0];
    }
    const maiorPedido = pedidos.reduce((maior, atual) => {
   return Number(atual.quantidade) > Number(maior.quantidade) ? atual : maior;
});
    console.log(`Pedidos: ${pedidosTotal} | Items: ${totalItem} | Urgentes: ${urgentes} | Setor Top: ${setorTop} | Maior Pedido: ${maiorPedido.id} : ${maiorPedido.quantidade}`)
// BUSCAR PEDIDOS
}else if(option == "4"){
let buscar = Number(prompt("Digite o Id do Pedido: "));
// Metodo para saber se o Id está certo
pedido = pedidos.find(p => p.id === buscar);

if(pedido){
    console.log("Pedido encontrado:");
    console.log(`Id:| ${pedido.id} | Produto: ${pedido.produto} | Quantidade: ${pedido.quantidade} | Prazo: ${pedido.prazo}`);
} else {
    console.log("Pedido não encontrado");
    }
 }
 // Sair e mostrar o Relatorio Final
 else if(option == "5"){
  let relatorio = {
        totalPedidos: pedidos.length,
        totalItens: 0,
        urgentes: 0,
        altas: 0,
        medias: 0,
        baixas: 0
    };
    for(let pedido of pedidos){
        relatorio.totalItens += Number(pedido.quantidade);

        if(pedido.prazo <= 2){
            relatorio.urgentes++;
        } else if(pedido.prazo <= 5){
            relatorio.altas++;
        } else if(pedido.prazo <= 10){
            relatorio.medias++;
        } else {
            relatorio.baixas++;
        }
    }
    console.log(`Pedidos: ${relatorio.totalPedidos} | Itens: ${relatorio.totalItens} | Urgentes: ${relatorio.urgentes} | Altas: ${relatorio.altas} | Médias: ${relatorio.medias} | Baixas: ${relatorio.baixas}`);
 }else{
    console.log("Opção inválida!")
         break;
 }
}
