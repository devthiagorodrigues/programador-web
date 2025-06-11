/*4 - crie um array de alunos. Cada aluno tem:
• Nome
• Notas (um array com 3 números)
O programa deve calcular a média das 3 notas de cada aluno, mostrar o nome,
a média e se foi Aprovado (média ≥ 7) ou Reprovado.*/

let alunos = [
    { nome: "Mariana", notas: [10, 10, 9.5] },
    { nome: "Joana ", notas: [7, 6, 5] },
    { nome: "Thiago", notas: [10, 9, 8] },
{ nome: "Marlon ", notas: [5, 3, "k"] }
];


let lista = `SGSA - Sistema de Gerenciamento de Sala de Aula.\n`
for (let aluno of alunos) {
    let soma = 0;
    for (let nota = 0; nota < aluno.notas.length; nota++) {
        soma += aluno.notas[nota];
    }

    let media = soma / aluno.notas.length;
    media = media.toFixed(2);
    
    if (media >= 7) {
        lista += `ALUNO(A): ${aluno.nome} | MÉDIA: ${media} | CONSELHO: APROVADO.\n`
    } else if (media <= 6) {
        lista += `ALUNO(A): ${aluno.nome} | MÉDIA: ${media} | CONSELHO: REPROVADO.\n`
    } else {
        lista += `Ocorreu um erro ao calcular a média do aluno ${aluno.nome}.\n`
    }

}

alert(lista)