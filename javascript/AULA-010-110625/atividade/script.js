/*1 - Crie uma função contarEpisodiosAssistidos que recebe um array de
episódios (onde cada episódio é um objeto com a propriedade assistido que é
true ou false) e retorna quantos episódios foram assistidos.*/

function contarEpisodiosAssistidos(serie) {
    let epAssistido = 0;
    for (let i = 0; i < serie.length; i++) {
        if (serie[i].assistido) {
            epAssistido++;
        }
    }

    return `${epAssistido} ep's foram assistidos.`;

}

const pulse = [
    { ep: 1, assistido: true },
    { ep: 2, assistido: true },
    { ep: 3, assistido: true },
    { ep: 4, assistido: true },
    { ep: 5, assistido: true },
    { ep: 6, assistido: false },
    { ep: 7, assistido: false },
];

console.log(contarEpisodiosAssistidos(pulse));

/*2 - Você é responsável por organizar uma playlist de músicas. Cada música é
representada por um objeto que contém as seguintes propriedades:
• nome (string): o título da música,
• duracao (número): a duração da música, em segundos
Sua tarefa é criar uma função chamada musicaMaisLonga que recebe um array
com várias músicas e retorna o nome da música que tem a maior duração. Se o
array estiver vazio, a função deve retornar uma string informando que não há
músicas para analisar.*/

// function musicaMaisLonga(playlist) {
//     let duracaoMaisLonga = 0;
//     let nomeMusicaMaisLonga = "";

//     for (let musica of playlist) {
//         if (musica.duracao > duracaoMaisLonga) {
//             duracaoMaisLonga = musica.duracao;
//             nomeMusicaMaisLonga = musica.nome;
//         }
//     }

//     return `A música mais longa é ${nomeMusicaMaisLonga} com ${duracaoMaisLonga} minutos.`
// }

// let gospel = [ 
//     { nome: "Deus e Eu", duracao: 5 },
//     { nome: "Ninguém explica Deus", duracao: 10 },
//     { nome: "Maranata", duracao: 3 },
//     { nome: "Jesus Meu Guia É", duracao: 6 },
// ]

// console.log(musicaMaisLonga(gospel));
