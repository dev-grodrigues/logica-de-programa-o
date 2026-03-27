let estoque = [5, 1, 8, 9, 11, 2, 0, 4]
let semEstoque = 0;
let estoqueBaixo = 0;

for(i = 0; i < estoque.length;i++){
    if(estoque[i] == 0){
        semEstoque++
        console.log("Você está sem estoque!", semEstoque)
    }if(estoque[i] <= 5){
        estoqueBaixo++
        console.log("O estoque está em nivel baixo!", estoqueBaixo)
    }
}
console.log("Você precisa repor essa quantidade de produtos: ", semEstoque + estoqueBaixo)
