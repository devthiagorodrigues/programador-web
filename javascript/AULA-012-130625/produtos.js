let quantidade = parseInt(prompt("Quantos produtos deseja cadastrar:"));
let produtos = [];

for (let i = 0; i < quantidade; i++) {
    let nomeProduto = prompt(`Digite o numero do produto ${i + 1}`);
    const preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}`));

    produtos.push({
        nome: nomeProduto,
        preco: preco
    });
}

console.log("Produtos cadastrados");
produtos.forEach((produto, i) => {
    console.log(`${i + 1}. ${produto.nome} - ${produto.preco}`);
});