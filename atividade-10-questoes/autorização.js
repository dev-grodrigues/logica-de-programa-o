let idade = 16;
let temAutorização = true

if(idade >= 18){
    console.log("Entrada Liberada, curta o evento!")
}else if(idade >= 16 && temAutorização == true){
    console.log(`Entrada Liberada, curta o evento!`)
}else{
    console.log(`Entrada Negada!`)
}