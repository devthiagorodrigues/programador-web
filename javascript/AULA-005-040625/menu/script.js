/*1 - Crie um programa que simule um menu interativo utilizando listas
(arrays) com as seguintes opções:
1 - Adicionar item ao carrinho
2 - Remover item do carrinho
3 - Ver total de itens no carrinho
4 – Sair

O programa deve exibir esse menu repetidamente até que o usuário escolha a
opção 4 (Sair).

Cada opção deve executar uma ação simples:
Ao escolher 1, simule a adição de um item ao carrinho.
Ao escolher 2, simule a remoção de um item do carrinho (caso haja itens).
Ao escolher 3, mostre o número atual de itens no carrinho.
Ao escolher 4, exiba uma mensagem de saída e encerre o programa.
Garanta que o menu seja exibido pelo menos uma vez, independentemente da
escolha inicial do usuário.*/

let opcao;
let lista = [];
let carrinho = [];
let item, indice;

do {
    opcao = parseInt(prompt(`
        Bem-vindo ao SENAC'Store. Escolha uma opção:
        1 - Adicionar item ao carrinho
        2 - Remover item do carrinho
        3 - Ver total de itens no carrinho
        4 – Sair
        `));

    switch (opcao) {
        case 1:
            item = prompt("Digite o nome do produto que vai ser adicionado:")
            carrinho.push(item);
            alert(`${item} adicionado ao carrinho.`)
            console.log(`${item} adicionado ao carrinho.`)
            break;

        case 2:
            if (carrinho.length == 0) {
                alert("O carrinho está vázio.")
            } else {

                for (let i = 0; i < carrinho.length; i++) {
                    lista += `${i + 1} - ${carrinho[i]}\n`;
                }

                indice = parseInt(prompt(` Digite o número do item que você deseja remover: \n${lista}`))

                if (indice >= 0 && indice <= carrinho.length) {
                    let removido = carrinho.splice(indice - 1, 1);
                    alert(`Item ${removido} removido com sucesso.`)
                    console.log(`Item ${removido} removido com sucesso.`)
                }
            }
            lista = [];
            break;

        case 3:
            if (carrinho.length == 0) {
                alert("O carrinho está vázio.")
            } else {
                for (let i = 0; i < carrinho.length; i++) {
                    lista += `${i + 1} - ${carrinho[i]}\n`
                }

                alert(`Total de itens\n${lista}`)
            }
            lista = [];
            break;

        case 4:
            alert("Obrigado por comprar na SENAC'Store. Até logo!");
            break;


        default:
            alert("Opção inválida. Tente novamente.");
            break;

    }
} while (opcao !== 4);