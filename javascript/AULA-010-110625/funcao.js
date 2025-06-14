// function saudacao() {
//     console.log("Olá, seja bem-vindo ao sistema!");
// }

// saudacao()

// function cumprimentar(nome) {
//     console.log(`Olá, ${nome}!`);
// }

// cumprimentar("Thiago");
// cumprimentar("Esthefany");
// cumprimentar("Tifany");

// function soma(a, b) {
//     console.log(`A soma é: `);
//     return a + b;
// }

// console.log(soma(10, 20));

// function subtracao(valor1, valor2) {
//     let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
//     let valor2 = parseFloat(prompt("Digite o segundo valor:"));
//     return valor1 - valor2;
// }

// console.log(subtracao());


// function verificarIdade(idade) {
//     if (idade >= 18) {
//         return "Maior de idade";
//     } else {
//         return "Menor de idade";
//     }
// }

// let idade = parseInt(prompt("Digite a sua idade: "))

// alert(verificarIdade(idade))

// function calcularIdade() {
//     let nome = prompt("Digite seu nome:");
//     let anoNascimento = prompt("Digite o ano que você nasceu:");

//     let anoAtual = new Date().getFullYear();

//     let idade = anoAtual - anoNascimento;

//     return `Você tem aproximadamente ${idade} anos.`;
// }

// console.log(calcularIdade());


function verificarParOuImpar() {
    let numero = Number(prompt("Digite um número: "));

    //Is Not A Number
    if (isNaN(numero)) {
        return "Valor inválido";
    } else if (numero % 2 === 0) {
        return `O número ${numero} é par`;
    } else {
        return `O número ${numero} é impar`;
    }
}

console.log(verificarParOuImpar());