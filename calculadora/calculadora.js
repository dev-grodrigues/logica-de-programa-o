let num1 = 0;
let num2 = 15;
let operacao = "+"

function calculadora(num1, num2, operacao){
 let resultado;

 if(operacao === "+"){
    resultado = num1 + num2;
 }else if(operacao === "-"){
    resultado = num1 - num2;
}else if(operacao === "*"){
    resultado = num1 * num2;
 }else if(operacao === "/"){
    if(num2 == 0){
        return "Erro, Divisão por zero!";    
    }
    resultado = num1 / num2
 }else{
    return "Operação invalida";
 }
 return resultado;
}
console.log("O resultado é:", calculadora(num1, num2, operacao))