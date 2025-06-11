// let produto = {
//     nome: "Caneta",
//     estoque: 5
// };

// while (produto.estoque > 0) {
//     console.log(`Vendendo 1 ${produto.nome}. Estoque atual: ${produto.estoque}`);
//     produto.estoque--;
// }

// console.log("Produto esgotado.")


let livros = [
    { titulo: "Dom Casmurro", exemplares: 3 },
    { titulo: "1984", exemplares: 10 },
    { titulo: "Harry Potter", exemplares: 1 }
];

let continuar = true;

while (continuar) {
    let lista = `Livros disponívels:\n`;
    for (let i = 0; i < livros.length; i++) {
        lista += `${i + 1}. ${livros[i].titulo} - Exemplares: ${livros[i].exemplares}\n`
    }
    lista += `\nDigite o número do livro para atualizar ou 'sair' para encerrar o programa:`

    let escolha = prompt(lista);

    if (escolha === null || escolha.toLowerCase() === "sair") {
        continuar = false;
        break;
    }

    let indice = parseInt(escolha) - 1;

    if (!isNaN(indice) && indice >= 0 && indice < livros.length) {
        let novoValor = parseInt(prompt(`Digite o novo número de exemplares para ${livros[indice].titulo}`));

        if (!isNaN(novoValor)) {
            livros[indice].exemplares = novoValor;
            alert("Atualizado com sucesso!");
        } else {
            alert("Valor inválido.")
        }
    } else {
        alert("Valor inválido.")
    }
}

let resumo = `Resumo da biblioteca:\n`;
for (let livro of livros) {
    resumo += `${livro.titulo}: ${livro.exemplares} exemplares.\n`;
}

alert(resumo);