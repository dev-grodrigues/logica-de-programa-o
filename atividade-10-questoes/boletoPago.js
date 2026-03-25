let valorBoleto = 90;
let diasAtraso = 10;
let multaFixa = (valorBoleto * 2) / 100
let jurosDia = valorBoleto * 0.001 * diasAtraso

if(diasAtraso == 0){
    console.log(`Você não está em atraso, o valor do boleto é `, valorBoleto)
}else if(diasAtraso !==  0){
    console.log(`Você está em atraso, será aplicada uma multa de ${multaFixa.toFixed(1)} 
    Com juros de ${jurosDia.toFixed(2)} 
    Valor total do boleto é ${valorBoleto + jurosDia + multaFixa}`)
}else{
}
