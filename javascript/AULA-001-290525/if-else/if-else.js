//////////////////////////////////////////////////////////////////////EXEMPLO 01////////////////////////////////////////////////////////////////
// let nota = 10; 

// if (nota> 10) {
//     console.log(`Aluno aprovado: ${nota}`);
// } else {
//     console.log(`Aluno reprovado`);
// }

//////////////////////////////////////////////////////////////////////EXEMPLO 02////////////////////////////////////////////////////////////////
// let numero = -5;

// if (numero > 0) {
//     console.log("O número é positivo'");
// } else if (numero < 0) {
//     console.log("O número é negativo");
// } else {
//     console.log("O número é zero");
// }


alert("Bem vindo ao NutriCalc.")
let peso = parseFloat(prompt("Digite o seu peso:"));
let altura = parseFloat(prompt("Digite sua altura:"));

let imc = peso / (altura * altura);

let mensagem = `Seu IMC é ${imc.toFixed(2)}. Grau: `;

if (imc < 18.5) {
    alert(`${mensagem} Muito magro.`)
} else if (imc > 18.5 && imc < 24.9) {
    alert(`${mensagem} Normal.`)
} else if (imc > 25.0 && imc < 29.9) {
    alert(`${mensagem} Sobrepeso.`)
} else if (imc > 30.0 && imc < 34.9) {
    alert(`${mensagem} Obesidade Grau I `)
} else if (imc > 35.0 && imc < 39.9) {
    alert(`${mensagem} Obesidade Grau II`)
} else if (imc > 40) {
    alert(`${mensagem} Obesidade Grau III ou Mórbido.`)
} else if (imc < 0) {
    alert('Algum valor está errado. O IMC não pode ser negativo!')
} else {
    alert("Valor não identificado.")
}