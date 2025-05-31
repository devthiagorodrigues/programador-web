/////////////////////////////////////////////////ATIVIDADE 01/////////////////////////////////////////////////
/*1- Escreva um programa em JS que permita inserir o nome e a
velocidade de dois veículos e exiba na tela uma mensagem dizendo
qual dos dois é mais rápido (ou que as velocidades são iguais se
este for o caso).*/

// let carro1 = prompt("Digite o nome do primeiro carro:");
// let velocidade1 = parseFloat(prompt(`Digite a velocidade do carro ${carro1}`));

// let carro2 = prompt("Digite o nome do segundo carro:");
// let velocidade2 = parseFloat(prompt(`Digite a velocidade do carro ${carro2}`));

// if (velocidade1 > velocidade2) {
//     alert(`${carro1} é mais rápido do que ${carro2}`);
// } else if (velocidade2 > velocidade1) {
//     alert(`${carro2} é mais rápido do que ${carro1};`);
// } else if (velocidade1 === velocidade2 && velocidade2 === velocidade1) {
//     alert(`Os carros ${carro1} e ${carro2} possuem a mesma velocidade.`);
// } else {
//     alert("Algum campo errado. Preencha novamente.")
// }


/////////////////////////////////////////////////ATIVIDADE 02/////////////////////////////////////////////////
/*2 - Solicite o valor de uma compra. Se o valor for maior que R$100,
aplique um desconto de 10%. Mostre o valor final com desconto (se
houver).*/

// alert("Senac Store - Terminal de vendas")
// let valorTotal = Number(prompt("Infome o valor da compra em reais:"));

// if (valorTotal >= 100) {
//     let desconto = (valorTotal * 10) / 100;
//     valorTotal = valorTotal - desconto;
//     alert(`Você ganhou um desconto de 10%. Pague apenas: R$${valorTotal}`);
// } else {
//     alert(`Voê não posuí descontos. Pague R$${valorTotal}`);
// }

/////////////////////////////////////////////////ATIVIDADE 03/////////////////////////////////////////////////
/*3 - Peça ao usuário que digite a letra do turno em que estuda:
• "M" para Matutino
• "V" para Vespertino
• "N" para Noturno
Mostre uma mensagem com o turno correspondente*/

alert("Senac - Gerenciador de Turnos.")
let turnoLetra = prompt('Você estuda em qual turno? ATENÇÃO: Digite "M" para matutino | "V" para Vespertino | "N" para noturno ');

let turno = turnoLetra.toLowerCase();

if (turno === "m") {
    alert("Você estuda no turno MATUTINO");
} else if (turno === "v") {
    alert("Você estuda no turno VESPERTINO");
} else if (turno === "n") {
    alert("Você estuda no turno NOTURNO");
} else {
    alert("Turno não identificado. Tente novamente!")
}