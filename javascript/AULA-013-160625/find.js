const alunos = [ 
    { nome: "Thiago", nota: 8 },
    { nome: "Maria", nota: 9 },
    { nome: "João", nota: 7 }
];

const alunoBuscado = alunos.find(aluno => aluno.nome === "Thiago");

console.table(alunoBuscado);