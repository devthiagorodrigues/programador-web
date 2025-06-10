let livros = [
    { titulo: "Apocalipse", exemplares: 2 },
    { titulo: "Gênesis", exemplares: 4 },
    { titulo: "João", exemplares: 1 }
];

let continuar = true;

do {
    let opcao = prompt(`
        SGEDB - Sistema de Gerenciamento de Exemplares da Biblioteca
        1 - Exibir livros e quantidades de exemplares
        2 - Atualizar livros
        Digite "sair" para encerrar
    `);

    if (opcao === null || opcao.toLowerCase() === "sair") {
        continuar = false;
        break;
    }

    switch (opcao) {
        case "1":
            let lista = "Livros disponíveis:\n";
            for (let i = 0; i < livros.length; i++) {
                lista += `${i + 1} - ${livros[i].titulo} - Quantidade: ${livros[i].exemplares}\n`;
            } 
            alert(lista);
            break;

        case "2":
            let listaAtualizar = "Escolha o número do livro para atualizar:\n";
            for (let i = 0; i < livros.length; i++) {
                listaAtualizar += `${i + 1} - ${livros[i].titulo} - Quantidade: ${livros[i].exemplares}\n`;
            }
            listaAtualizar += `Digite "sair" para voltar.`;
            let escolha = prompt(listaAtualizar);

            if (escolha === null || escolha.toLowerCase() === "sair") break;

            let indice = parseInt(escolha) - 1;

            if (indice >= 0 && indice < livros.length) {
                let novaQtd = prompt(`Digite a nova quantidade para "${livros[indice].titulo}":`);
                if (novaQtd !== null && !isNaN(novaQtd)) {
                    livros[indice].exemplares = parseInt(novaQtd);
                    alert(`Atualizado com sucesso! "${livros[indice].titulo}" agora tem ${livros[indice].exemplares} exemplares.`);
                } else {
                    alert("Quantidade inválida.");
                }
            } else {
                alert("Livro não encontrado.");
            }
            break;

        default:
            alert("Opção inválida. Escolha 1, 2 ou digite 'sair'.");
            break;
    }
} while (continuar);

// Resumo final
let resumo = "Resumo final dos livros:\n";
for (let i = 0; i < livros.length; i++) {
    resumo += `${livros[i].titulo} - Quantidade: ${livros[i].exemplares}\n`;
}
alert(resumo);
