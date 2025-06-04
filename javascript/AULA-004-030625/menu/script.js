/*4 - Crie um programa que simule um menu interativo com as seguintes opções:
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

let carrinho = 0;
let opcao;

do {
    opcao = parseInt(prompt(`
        SENAC'Store
        1 - Adicionar item ao carrinho
        2 - Remover item do carrinho
        3 - Ver total de itens no carrinho
        4 – Sair
        `))

    switch (opcao) {
        case 1:
            carrinho++
            alert("Item adicionado ao carrinho.")
            break;

        case 2:
            if (carrinho >= 1) {
                carrinho--
                alert("Item removido do carrinho.")
            } else {
                alert("O carrinho está vazio.");
            }
            break;

        case 3:
            if (carrinho >= 1) {
                alert(`O carrinho possuí ${carrinho} itens.`);
            } else {
                alert("O carrinho está vazio.");
            }
            break;

        case 4:
            alert("Obrigado pela preferência. Volte sempre!");
            break;

        default:
            alert("Opção inválida, tente novamente.")
            break;
    }
} while (opcao !== 4);