let bairro = {
    centro: 5,
    brotas: 8,
    itapuã: 12,
    demais: 15
}
let valorPedido = 80
let valorDoFrete = bairro.brotas

if(valorPedido >= 80){
    console.log(`Você recebeu um cupom de frete grátis, O valor do seu pedido foi ${valorPedido}`)
}else{
    console.log(`Valor do frete ${valorDoFrete}, Total a pagar ${valorPedido + valorDoFrete}`)
}
    
