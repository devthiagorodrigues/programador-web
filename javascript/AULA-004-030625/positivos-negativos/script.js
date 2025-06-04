/*3 - Escreva um programa que continue pedindo ao usuário para
digitar um número positivo. O programa só termina quando o usuário
digitar um número negativo. Ao final, mostre:
• Quantos números positivos foram digitados.
• A soma de todos os números positivos.*/

let number = 0;
let i = 0;

let numeroPositivo;
let soma = 0;

while (number >= 0) {
    number = Number(prompt("Digite um número:"));

    if (isNaN(number)) {
        alert("Letras e símbolos não são permitidos. Digite um número.")
        break;
    }

    if (number >= 0) {
        numeroPositivo = number;
        soma = soma + numeroPositivo
        i++;
    }

    console.log(numeroPositivo);
}

if (i > 0) {
    alert(`
        ${i} números positivos foram digitados.
        A soma entre os positivos é: ${soma}
        `);
}