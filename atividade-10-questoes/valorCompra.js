let valorCompra = 100;

if(valorCompra < 100){
    console.log("Sem desconto: " + `
        Valor Final: `, valorCompra)
}else if(valorCompra >= 100 && valorCompra  <= 299.99){
    console.log("Você recebeu um Desconto de 5% !" + `
        Valor final: `, valorCompra - (valorCompra * 0.05));
}else if(valorCompra >= 300 && valorCompra <= 499.99){
    console.log("Você recebeu um Desconto de 10% !" + `
        Valor final: `, valorCompra - (valorCompra * 0.1));

}else if(valorCompra >= 500){
    console.log("Você recebeu um Desconto de 15% !" + `
        Valor final: `, valorCompra - (valorCompra * 0.15));
}else{
    console.log("Você não fez nenhuma compra!")
}

