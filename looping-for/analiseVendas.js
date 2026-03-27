let vendas = [100, 200, 150, 250, 100, 100, 90]
let total = 0;
let maiorVenda = Math.max(...vendas)

for(i = 0; i < vendas.length; i++){
total += vendas[i];
if(vendas[i] >= 100){
    console.log("Dias que as vendas foram maior que 100 é:", vendas[i])
}
}
console.log("Maior venda é: ", maiorVenda)
console.log("Media é igual:", (total / vendas.length).toFixed(2))
console.log("Total Vendido:", total)
