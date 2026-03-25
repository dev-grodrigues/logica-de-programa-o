let valor = [5, -3, 8];
// Usando estrutura condicional para saber se o item da posição 1  é menor que 0
if(valor[1] < 0){
    // Se o valor do item da posição 1 for menor que 0, altera o valor para 0 
    valor[1] = 0;
    console.log(valor[1]);
}else{
    console.log("Maior que 0");
}