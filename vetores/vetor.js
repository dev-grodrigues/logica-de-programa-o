let notas = [9.5, 9.1, 4]

if(notas[0] >= 7 && notas[1] >= 7 && notas[2] >= 7){
    console.log("Aprovado direto")
}else if(notas[0] < 4 || notas[1] < 4 || notas[2] < 4){
    console.log("Reprovado")
}else{
    console.log("Recuperação")
}