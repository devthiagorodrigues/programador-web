let opcao = 0;

const produtos = [
    { nome: "Arroz", quantidade: 5, precoUnitario: 20 },
    { nome: "Feijão", quantidade: 6, precoUnitario: 15 },
    { nome: "Cup noddles", quantidade: 4, precoUnitario: 20 }
];

function baixoEstoque() {
    let prodBaixoEstoque = [];

    produtos.forEach((prod) => {
        if (prod.quantidade <= 5) {
            prodBaixoEstoque.push(prod);
        }
    });

    let texto = "";

    if (prodBaixoEstoque.length === 0) {
        texto = "Nenhum produto está com estoque baixo.";
    } else {
        texto = "Produtos com estoque baixo:\n";
        prodBaixoEstoque.forEach((prod, i) => {
            texto += `${i + 1} - ${prod.nome}: ${prod.quantidade} unidades.\n`;
        });
    }

    alert(texto);
}

function relatorioProdutoValor() {
    let texto = "";

    produtos.forEach((prod, i) => {
        texto += `\n${i + 1} - ${prod.nome}`
    })

    let escolhaProduto = parseInt(prompt(` Digite o produto para gerar o reatório:${texto}
        `));

    if (isNaN(escolhaProduto)) {
        alert("Produto inválido ou inexistente.");
    }

    produtos.forEach((prod, i) => {
        if (i == escolhaProduto - 1) {
            texto = "";
            let total = prod.quantidade * prod.precoUnitario;
            texto = `O total em valor do estoque do ${prod.nome} é ${total}`
        }
    })

    alert(texto)
}

function relatorioEstoqueValor() {
    let total = 0;
    produtos.forEach((prod) => {
        total += prod.quantidade * prod.precoUnitario;
    })    

    alert(total);
    
}



do {
    opcao = prompt(`
        GDE - Gerenciamento de Estoque
        Escolha uma opção:
        1 - Listar produtos com estoque baixo.
        2 - Relatório de valor em estoque por produto.
        3 - Relatório de valor total em estoque.
        4 - Sair.
    `);

    switch (opcao) {
        case "1":
            baixoEstoque();
            break;

        case "2":
            relatorioProdutoValor();
            break;

        case "3":
            relatorioEstoqueValor();
            break;

        case "4":
            alert("Obrigado por utilizar nosso sistema!");
            break;
        default:
            alert("Opção inválida.");
            break;
    }

} while (opcao != 4);
