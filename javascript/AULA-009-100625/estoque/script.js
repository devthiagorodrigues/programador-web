/*3 - Você tem uma lista de produtos com o nome e a quantidade em estoque.
Escreva um código que percorra essa lista e exiba:
• Quais produtos estão com o estoque baixo (quantidade menor que 5)
• Quais estão com o estoque ok (5 ou mais).*/

let estoque = [
    { nome: "Relógio Rolex", quantidade: 4 },
    { nome: "Camiseta Boss", quantidade: 3 },
    { nome: "Tênis Nike", quantidade: 6 }
];

let lista = `
SGDE - Sistema de Gerenciamento de Estoque
\nProdutos em estoque:
`;
for (let i = 0; i < estoque.length; i++) {
    lista += `${estoque[i].nome} = ${estoque[i].quantidade}\n`
}

alert(lista);

let mensagemAlerta = `Atenção: os produtos abaixo têm menos de 5 unidades em estoque.\n`
for (let produto of estoque) {
    if (produto.quantidade < 5) {
        mensagemAlerta += `\n${produto.nome} = ${produto.quantidade}`
    }
}

alert(mensagemAlerta)