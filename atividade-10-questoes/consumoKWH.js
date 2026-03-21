let consumoKwh = 201
let kwh = {
    kwh1: 0.60,
    kwh2: 0.75,
    kwh3: 0.90
}
if(consumoKwh <= 100){
 console.log(`Valor total da conta é: ${consumoKwh * kwh.kwh1}`)
}
else if(consumoKwh >= 101 && consumoKwh <= 200){
 console.log(`Valor total da conta é: ${consumoKwh * kwh.kwh2}`)
}
else if(consumoKwh > 200){
    console.log(`Valor total da conta é: ${consumoKwh * kwh.kwh3}`)
}else{
    console.log(`Não teve valor calculado!`)
}