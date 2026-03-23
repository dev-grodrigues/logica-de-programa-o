let num1 = 101;
let num2 = 101;
let operacao = "*"

function calculadora(num1, num2, operacao){
 let resultado;

 if(operacao === "+"){
    resultado = num1 + num2;
 }else if(operacao === "-"){
    resultado = num1 - num2;
}else if(operacao === "*"){
   if(num1 > 100 && num2 > 100){
      return "Operação invalida!"
   }
    resultado = num1 * num2;
 }else if(operacao === "/"){
    if(num1 === 0 && num2 === 0){
        return "Erro, Divisão por zero!";    
    }
    resultado = num1 / num2
 }else{
    return "Operação invalida";
 }
 return resultado;
}
console.log("O resultado é:", calculadora(num1, num2, operacao))