let frutas = [
    ["Banana", "Amarelo"],
    ["Maça", "Vermelho"],
    ["Laranja", "Laranja"]
];

let nome = prompt("Digite o nome de uma fruta:");
let nomeFrutaPrompt = nome.toUpperCase(); // Correção: chamada de função com parênteses

let encontrada = false; // Controle para saber se a fruta foi encontrada

for (let linha = 0; linha < frutas.length; linha++) {
    let nomeFrutaMatriz = frutas[linha][0].toUpperCase(); // Nome da fruta da matriz em maiúsculo

    if (nomeFrutaPrompt === nomeFrutaMatriz) {
        alert(`${frutas[linha][0]} é da cor ${frutas[linha][1]}`);
        encontrada = true;
        break; // Já encontrou, não precisa continuar o loop
    }
}

if (!encontrada) {
    alert("Fruta não identificada.");
}