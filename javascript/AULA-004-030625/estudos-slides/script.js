let opcao;

do {

   opcao = parseInt(prompt(`
        1 - Exibir frase.
        2 - Exibir Autor
        3 - Sair
        `));

    switch (opcao) {
        case 1:
            alert("A flor mais linda do jardim, a jóia mais brilhante. Sou eu");
            break;

        case 2:
            alert("Thiago");
            break;
        
        case 3: 
            alert("Obrigado por acessar o frases.com")
            break;

        default: 
        alert("Opção inválida. Tente novamente!")
        break;
    }
} while (opcao !== 3);