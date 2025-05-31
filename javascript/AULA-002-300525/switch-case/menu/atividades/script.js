//////////////////////////////////ATIVIDADE 01//////////////////////////////////
/*1- Monte um menu com 3 filmes usando switch. Depois, use if else
para verificar se a pessoa tem idade suficiente para assistir.*/

// const idade = parseInt(prompt("Digite sua idade:"));

// let opcao = Number(prompt(`
//     Bem-vindo ao Cinenac \n
//     1 - Rei Leão \n
//     2 - Gente Grande \n
//     3 - Bird Box
//     `));

// switch (opcao) {
//     case 1:
//         alert("Este filme tem categoria LIVRE. Aproveite e divirta-se com a sua família!")
//         break;

//     case 2: 
//         if (idade >= 12) {
//             alert("Aproveite a sessão! Você tem a idade necessária para assistir o filme.");
//             break;
//         } else {
//             alert('Para assistir o filme: "Gente Grande" você precisa ter 12 anos ou mais. \nRespeite a classificação!');
//             break;
//         }

//     case 3: 
//         if (idade >= 18) {
//             alert("Aproveite a sessão! Você tem a idade necessária para assistir o filme.");
//             break;
//         }  else {
//             alert('Para assistir o filme: "Bird Box" você precisa ter 18 anos ou mais. \nRespeite a classificação!');
//             break;
//         }
//     default:
//         alert("Filme não encontrado. Tente novamente!");
//         break;
// }

//////////////////////////////////ATIVIDADE 02//////////////////////////////////
/*2- Crie um programa que peça ao usuário um valor em metros. Mostre
um menu com 4 opções de conversão:
1 - Para centímetros
2 - Para milímetros
3 - Para quilômetros
4 - Para polegadas*/

let metro = Number(prompt("Digite um valor em metros:"));

let opcao = Number(prompt(`
        Escolha uma opção de conversão: \n
        1 - Centímetros \n
        2 - Milímetros \n
        3 - Quilômetros \n
        4 - Polegas
    `));

switch (opcao) {
    case 1:
        let cm = metro * 100;
        alert(`${metro} convertido para centímetros é: ${cm}`)
        break;

    case 2:
        let mm = metro * 1000;
        alert(`${metro} convertido para centímetros é: ${mm}`)
        break;

    case 3:
        let km = metro / 1000;
        alert(`${metro} convertido para centímetros é: ${km}`)
        break;

    case 4:
        let pl = metro * 39.37;
        alert(`${metro} convertido para centímetros é: ${pl}`)
        break;
    
    case 5:
        alert("Saindo do sistema...")
        break;

    default:
        alert("Opção inválida. Tente novamente!")
        break;
}