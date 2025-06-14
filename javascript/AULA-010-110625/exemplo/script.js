function livrosMaisExtenso(livros) {
    if (livros.length === 0) {
        return "Nenhum livro para analisar";
    }

    let maiorNumeroPaginas = 0;
    let livroMaisLongo = "";

    for (let i = 0; i < livros.length; i++) {
        if (livros[i].paginas > maiorNumeroPaginas) {
            maiorNumeroPaginas = livros[i].paginas;
            livroMaisLongo = livros[i].titulo;
        }
    }

    return livroMaisLongo;
}

const biblioteca = [
    { titulo: "O Pequeno Príncipe", paginas: 96 },
    { titulo: "Senhor dos Anéis", paginas: 100 },
    { titulo: "1984", paginas: 328 },
    { titulo: "A Revolução dos Bichos", paginas: 117 }
];

console.log(`O livro com maior número de páginas é ${livrosMaisExtenso(biblioteca)}`);
