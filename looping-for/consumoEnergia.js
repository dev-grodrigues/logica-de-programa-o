let consumo = [42, 48, 50, 59, 51, 55]
let total = 0;
let diasAlto = 0;
let alerta = 0;

for(i = 0; i < consumo.length;i++){
    total += consumo[i]
    // Estruturas Condicionais
    if(consumo[i] >= 50){
        diasAlto++
    console.log("Os dias altos são: ", diasAlto)
 }if(consumo[i] > 58){
    alerta++
    console.log(`ALERTA CRITICO, O CONSUMO ESTÁ ELEVADO!!
        --------------------`)
 }
}
console.log("O consumo total foi:", total)
console.log("A media de consumo foi ", (total / consumo.length).toFixed(2) + "kWh")