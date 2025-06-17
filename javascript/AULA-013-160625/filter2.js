const produtos = [
    { nome: "Camisa", estoque: 10 },
    { nome: "Bermuda", estoque: 2 },
    { nome: "Tênis", estoque: 0 },
]

const produtosDisponiveis = produtos.filter(produto => produto.estoque > 0);

console.log("Produtos disponíveis:");

console.table(produtosDisponiveis);