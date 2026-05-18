#include <stdio.h>

int main()
{
    float tempC;
    printf("Digite a temperatura em Celsius:\n");
    scanf("%f",&tempC);
    float tempF = (tempC * 1.8) + 32;
    float tempK = tempC + 273.15;
    printf("Temperatura em Celsius: %.2f°C\n", tempC);
    printf("Temperatura em Fahrenheit: %.2f°F\n", tempF);
    printf("Temperatura em Kelvin: %.2f°K\n", tempK);

    return 0;
}
