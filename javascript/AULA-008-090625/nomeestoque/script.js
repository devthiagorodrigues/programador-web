/*
1 - Crie um objeto produto com: nomeestoque (quantidade inicial)
Depois, use um while para simular a retirada de 1 unidade por vez, até que o
estoque acabe. A cada retirada, exiba a quantidade restante.
*/

let nomeestoque = [
    { nome: "iPhone 15 Plus", estoque: 4 },
    { nome: "iPhone 14 Pro Max", estoque: 4 },
    { nome: "iPhone 12 Pro", estoque: 4 },
    { nome: "iPhone 11", estoque: 4 },
];

while (true) {
    let aindaTemEstoque = false;

    for (let produto of nomeestoque) {
        if (produto.estoque >= 0) {
            produto.estoque--;
            console.log(`Retirou 1 unidade de ${produto.nome}. Restam: ${produto.estoque}`);
            aindaTemEstoque = true; 
        }
    };

    if (!aindaTemEstoque) {
        console.log("Todos os produtos estão esgotados.");
        break;
    }

} 