let temp = [90, 80, 70, 65, 78, 91, 88];
let soma = 0;

for(i = 0; i < temp.length; i++){
soma += temp[i];
if(temp[i] >= 80){
    console.log("Esses dias a temperatura passou de 80°C:", temp[i]);
}
if(temp[i] > 90){
    console.log("ALERTA! TEMPERATURA ALTA; ",temp[i]);
}
}
console.log("Media é igual:", (soma / temp.length).toFixed(2));

