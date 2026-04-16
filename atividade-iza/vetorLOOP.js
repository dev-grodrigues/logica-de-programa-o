let vetores = [5, 10, 15, 20, 25];
let maior = vetores[0]
let menor = vetores[0]
function somaVetores(vetores){
 return vetores.reduce((acc, atual) => acc + atual, 0);
}
let media = somaVetores(vetores) / vetores.length
for(i = 0; i < vetores.length; i++){
 somaVetores
}
console.log("A soma dos vetores é: ",somaVetores(vetores))
console.log(`A media dos vetores é: `,media)
for(i = 1; i < vetores.length;i++){
    if(vetores[i] > maior){
        maior = vetores[i]
    }
    if(vetores[i] < menor){
        menor = vetores[i]
    }
}
console.log(`O maior valor do vetor é ${maior} e o menor é ${menor}`)