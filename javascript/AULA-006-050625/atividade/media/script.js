    /*2 - Crie uma matriz com 3 alunos. Cada linha deve conter o nome e "presente"
    ou "ausente". Peça ao usuário para digitar o nome de um aluno e informe se
    ele está presente ou ausente. Se o nome não estiver na lista, avise o
    usuário.*/

    let alunos = [
        ["Thiago", "Presente"],
        ["Mariana", "Presente"],
        ["Esthefany", "Ausente"],
    ];

    let busca = prompt("Digite o nome do aluno:");
    busca = busca.toUpperCase();

    let encontrado = false;

    for (let i = 0; i < alunos.length; i++) {
        if(alunos[i][0].toUpperCase() === busca) {
            encontrado = true;

            if (alunos[i][1] === "Presente") {
                alert("O aluno está presente.")
            } else {
                alert("O aluno está ausente.")
            }

            break;
        }
    }

if(!encontrado) {
    alert("Aluno não encontrado.")
}