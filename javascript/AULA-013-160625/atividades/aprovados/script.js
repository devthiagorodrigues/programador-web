const candidatos = [
    { nome: "Thiago", nota: 71 },
    { nome: "Mario", nota: 80 },
    { nome: "João", nota: 60 },
    { nome: "Henrique", nota: 50 },
    { nome: "Bruno", nota: 90 },
    { nome: "Hélio", nota: 88 },
    { nome: "Fernandes", nota: 96 }
];

const aprovados = candidatos.filter(candidato => candidato.nota > 70);

console.log("Lidta de aprovados:");

aprovados.forEach(aprovado => {
    console.log(`${aprovado.nome} - Nota: ${aprovado.nota}`)
})

aprovados.sort((a, b) => a.nota - b.nota)
console.log(aprovados);