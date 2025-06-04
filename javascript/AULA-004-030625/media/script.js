/*2 - Crie um programa que leia 5 números informados pelo usuário e
mostre:
• A soma total desses números.
• A média entre eles.*/

let i = 1;
let soma = 0;

while (i <= 5) {
    let num = Number(prompt("Digite um número:"));

    soma = soma + num;

    i++;
}

let media = soma / 5;

alert(`
    A soma entre esses números é ${soma};
    A media entre esses números é ${media};
    `)