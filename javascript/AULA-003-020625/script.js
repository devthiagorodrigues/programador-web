/*1- Use um while para pedir 5 números ao usuário. 
Conte quantos são pares e quantos são ímpares, e exiba no final.*/

// let i = 1;
// while (i <= 5) {
//     let n = Number(prompt("Digite um número"));
//     if (n % 2 == 0) {
//         console.log("Número par")
//     } else if (n % 2 == 1) {
//         console.log("Número ímpar");
//     } else {
//         console.log("O valor digitado não é um número.");
//     }
//     i++
// }

/*2 - Peça ao usuário que digite 5 palavras. Considere uma
palavra "curta" se tiver até 4 letras.*/

// for (let i = 1; i <= 5; i++) {
//     let palavra = prompt("Digite uma palavra:");

//     palavraLength = palavra.length;

//     if (palavraLength <= 4) {
//         console.log("Palavra curta");
//     } else {
//         console.log("Palavra longa");
//     }
// }

/*3 - Peça para o usuário cadastrar um nome de usuário e uma
senha. Após fazer isso verificar as informações de username
e password do usuário em uma estrutura condicional, e
informar para o usuário se ele conseguiu efetuar o “login”.*/

let opcao;
let username = "";
let password = "";

do {
    opcao = Number(prompt(`
        Bem-vindo a Central dos Alunos Senac. Escolha uma opção: \n 
        1 - Cadastrar-se \n
        2 - Login \n
        3 - Sair
        `));

    if (opcao == 1) {
        username = prompt("Escolha um username:");
        password = prompt("Agora escolha uma senha:");
        confirmPassword = prompt("Confirme novamente a sua senha:");

        if (password === confirmPassword) {
            alert("Usuário cadastrado com sucesso.");
            console.log("Usuário cadastrado com sucesso.");
        } else {
            alert("A senha e a confirmação de senha devem ser iguais.");
            console.log("A senha e a confirmação de senha devem ser iguais.");
        }

    } else if (opcao == 2) {
        usernameForLogin = prompt("Digite o seu username:");
        passwordForLogin = prompt("Digite a sua senha:");

        if (usernameForLogin === username && passwordForLogin === password) {
            alert("Usuário logado.");
            console.log("Usuário logado.");
        } else {
            alert("Acesso negado. Confira suas credenciais.");
            console.log("Acesso negado. Confira suas credenciais.");
        }
    }

} while (opcao !== 3);
