let senha = `birobiro123`

if(senha.length < 8){
    console.log(`A senha precisa ter 8 caracteres ou mais!`)
}else if(senha.includes("123")){
    console.log(`A senha está inválida, Motivo: Senha fraca!`)
}else{
    console.log(`Senha válida, aproveite nosso sistema! <3`)
}