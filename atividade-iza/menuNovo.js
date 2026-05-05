const prompt = require('prompt-sync')();
let vetor = [];

console.log("Preencha o vetor com 5 números inteiros:");
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}
// ===== FUNÇOES ====== //
function somaVetor(vetor){
    return vetor.reduce((acc, vet) => acc + vet, 0);
}
function multiplicaVetor(vetor){

}
function multiplicarPorCinco(vetor){
let multiplica = vetor.map(n => n * 5)
vetor = multiplica
return vetor
}
function mudarElemento(vetor){
 
}
function ordenarVetor(vetor){
   for (let i = 0; i < vetor.length; i++) {
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[i] > vetor[j]) {
                let aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
}
function inverterVetor(vetor){
    return vetor.reverse()
}
function mostrarVetor(vetor){
    console.log(vetor);
}
// ===== Menu =====
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("1. Soma do vetor");
    console.log("2. Produto do vetor");
    console.log("3. Multiplicar todos os elementos por 5");
    console.log("4. Mudar elemento do vetor");
    console.log("5. Ordenar vetor (Bubble Sort)");
    console.log("6. Inverter vetor");
    console.log("7. Mostrar vetor");
    console.log("0. Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao) {
        case 1:
            console.log("Soma =", somaVetor(vetor));
            break;
        case 2:
            console.log("Produto =", multiplicaVetor(vetor));
            break;
        case 3:
            multiplicarPorCinco(vetor);
            console.log("Vetor atualizado!");
            break;
        case 4:
            mudarElemento(vetor);
            break;
        case 5:
            ordenarVetor(vetor);
            console.log("Vetor ordenado!");
            break;
        case 6:
            inverterVetor(vetor);
            console.log("Vetor invertido!");
            break;
        case 7:
            mostrarVetor(vetor);
            break;
        case 0:
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);