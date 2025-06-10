let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 }
];

let continuar = true;

while (continuar) {
    let lista = "Lista de produtos:\n";
    for (let i = 0; i < produtos.length; i++) {
        lista += `${i + 1}. ${produtos[i].nome} - R$${produtos[i].preco}\n`
    }
    lista += "Digite o número que você deseja alterar ou 'sair' para encerrar:"
    
    let escolha = prompt(lista);

    if (escolha === null || escolha.toLowerCase() === 'sair') {
        continuar = false;
        break;
    }

    let indice = parseInt(escolha) - 1;

    if (!isNaN(indice) && indice >= 0 && indice < produtos.length) {
        let novoPreco = parseFloat(prompt(`Digite o novo preço para ${produtos[indice].nome}`));

        if (!isNaN(novoPreco)) {
            produtos[indice].preco = novoPreco;
        } else {
            alert("Preço inválido. Tente novamente");    
        }
    } else {
        alert("Opção inválida. Tente novamente");    
    }

    let resumo = "Preços atualizados:\n";

    for (let p of produtos) {
        resumo += `${p.nome}: R$${p.preco}\n`;
    }

    alert(resumo);
}