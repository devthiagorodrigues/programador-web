// const alunos = [
//     { nome: "Thiago", notas: [8,9,9] },
//     { nome: "João", notas: [8,5,7] },
//     { nome: "Maria", notas: [6,9,4] }
// ]

// const resultados = alunos.map(aluno => {
//     const media = aluno.notas.reduce((soma, nota) => soma + nota, 0) / aluno.notas.length;


//     return { 
//         nome: aluno.nome,
//         media: media.toFixed(2),
//         status: media >= 7 ? "Aprovado" : "Reprovado"
//     };
// })

// console.log(resultados);


// const vendas = [
//     { produto: "Camisa", preco: 50 },
//     { produto: "Calça", preco:  80 },
//     { produto: "Moleton", preco: 130 },
// ]

// let total = 0;
// const relatorio = [];

// vendas.forEach(venda => {
//     total += venda.preco;
//     relatorio.push(`${venda.produto}: R$${venda.preco.toFixed(2)}`);
// });

// console.log(relatorio);

// console.log(`Total: R$${total.toFixed(2)}`);

const users = [
    { name: "Thiago", email: "thiago@gmail.com", years: 19 },
    { name: "Teco", email: "teco@gmail.com", years: 20 },
    { name: "João", email: "joao@gmail.com", years: 14 }
]

const payload = users.map(user => ({
    fullname: user.name.toUpperCase(),
    email: user.email.toLowerCase(),
    years: user.years >= 18 ? "Maior de idade" : "Menor de idade"
}))

console.log(payload);
