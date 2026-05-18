#include <stdio.h>

int main()
{
        float peso;
        float altura;
        
        printf("Digite seu peso: ");
        scanf("%f", &peso);
        printf("Digite sua altura: ");
        scanf("%f", &altura);
        float imc = peso / (altura * altura);
        printf("IMC: %.2f\n", imc);
        if(imc < 18.5){
            printf("Abaixo do Peso");
        }else if(imc >= 18.5 && imc < 24.9){
            printf("Normal");
        }else if(imc >= 25 && imc < 29.9){
            printf("Sobrepeso");
        }else{
            printf("Obeso");
        }
        

    return 0;
}
