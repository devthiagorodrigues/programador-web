/*3 - Crie uma lista de números inteiros. Percorra a lista
somando os números até encontrar o primeiro número negativo.
Quando encontrar, pare o laço e mostre a soma parcial.*/

let num = [10, 2, 3, 9, 1, 7, 9, -6, 10];
let soma = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
        soma += num[i];
        console.log(num[i]);
    } else {
        console.log(`Um número negativo foi encontrado. O resultado da soma entre os positivos é: ${soma}`);
        break;
    }
}