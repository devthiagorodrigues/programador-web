const produtos = [
    { nome: "Camisa", preco: 100.0 },
    { nome: "Calça", preco: 300.0 }
]

const comDesconto = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}))

console.log(produtos);
console.log(comDesconto);
