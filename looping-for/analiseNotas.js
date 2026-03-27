let notas = [10, 8, 9.5, 5, 6, 4, 6.8,]
let aprovados = 0;
let reprovados = 0;
let soma = 0;
let maiorNota = Math.max(...notas)

for(i = 0; i < notas.length; i++){
    soma += notas[i]
    if(notas[i] >= 7 ){
        aprovados++
        console.log("Notas Aprovadas:",notas[i])
    }else{
        reprovados++
        console.log("Notas Reprovadas:", notas[i])
    }
}
console.log("A maior nota da turma foi: ", maiorNota)
console.log("Media da turma é: ", (soma / notas.length).toFixed(2))