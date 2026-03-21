let distanciaKm = 15;
let orcamento = 0;

if(distanciaKm <= 2){
    console.log(`Irei a pé!`)
}else if(distanciaKm <= 8 && orcamento >= 10){
    console.log(`A distancia a percorrer é: ${distanciaKm + "km"}
Melhor Ir de Ônibus!`)
}else if(distanciaKm <= 15 && orcamento >= 25){
    console.log(`A distancia a percorrer é: ${distanciaKm + "km"}
Melhor Ir de Carro ou Moto por aplicativo!`)
}else{
    console.log(`Não é possivel com esse orçamento!
Total de orçamento: ${orcamento}`)
}