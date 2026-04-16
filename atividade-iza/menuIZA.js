const prompt = require('prompt-sync')();
let valores = [];
let opcao;
let maior = valores[0]
let menor = valores[0]
let soma = 0;

do {
    opcao = parseInt(prompt(
        "\nMENU:\n" +
        "1 - Preencher vetor\n" +
        "2 - Somar elementos\n" +
        "3 - Calcular média\n" +
        "4 - Maior e menor valor\n" +
        "5 - Buscar elemento\n" +
        "0 - Sair\n" +
        "Escolha uma opção:"
    ));

    switch (opcao) {

        case 1:
        //código
        let tamanho = parseInt(prompt("Quantos elementos deseja inserir?"));
        for(i = 0; i < tamanho; i++){
            let num = parseInt(prompt(`Digite o ${i + 1} valor:`));
            valores.push(num)
       }
       console.log("Vetor:", valores);
            break;

        case 2:
           
           for (let i = 0; i < valores.length; i++) {
           soma += valores[i];
           }
       console.log(`A soma dos valores é ${soma}`)
        //código
            break;

        case 3:
        //código
        let somaMedia = 0;
        for(i = 0; i < valores.length; i++){
            somaMedia += valores[i]
        }
if(valores.length = 0){
    let media = somaMedia / valores.length;
    console.log("Média: ", media);
}else{
    console.log("Vetor vazio")
}
            break;

        case 4:
            let maior = valores[0]
            let menor = valores[0]
            for(i = 1; i < valores.length;i++){
    if(valores[i] > maior){
        maior = valores[i]
    }
    if(valores[i] < menor){
        menor = valores[i]
    }
}
console.log(`O maior valor do vetor é ${maior} e o menor é ${menor}`)
        //código
            break;

        case 5:
           const busca = valores.indexOf(Number(prompt('Digite o valor do elemento: ')))
        console.log("A posição do vetor é: ",busca)
        //código
            break;

        case 0:
            console.log("Encerrando...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);