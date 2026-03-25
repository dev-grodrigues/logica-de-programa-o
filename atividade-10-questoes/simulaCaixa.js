let saldo = 0;
let valorCompra = 40;
let temLimite = true
let limite = 50;

if(saldo >= valorCompra){
    console.log(`Compra aprovada!
Valor da Compra:`, valorCompra)
}else if(temLimite === true && (saldo + limite) >= valorCompra){
    console.log(`Sua compra foi aprovada pelo limite;
    Valor da compra: ${valorCompra}
    Limite após a compra:`, limite - valorCompra);
}else{
    console.log(`Sua compra foi negada!`)
}