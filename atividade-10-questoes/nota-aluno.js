let aluno ={
 nota1: 10,
 nota2: 10
}
let media = (aluno.nota1 + aluno.nota2) / 2
let notaRec = 6;
let situacaoFinal = ""

if(media >= 7){
    situacaoFinal = "Aprovado na Média"
}else if(media < 4){
    situacaoFinal = "Reprovado Direto"
}else if(notaRec > 6){
    situacaoFinal = "Aprovado na Recuperação"
 }else{
    situacaoFinal = "Reprovado na Recuperação"
 }
console.log(`Sua média foi: ${media} | Situação: ${situacaoFinal}`)