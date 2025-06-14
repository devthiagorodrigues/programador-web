/*2 - Você tem uma lista de tarefas com título, status de conclusão (true ou
false) e prioridade ("alta", "média" ou "baixa"). Você precisa gerar um novo
array com a seguinte estrutura:
• título em letras maiúsculas;
• statusTexto: "Concluída" ou "Pendente";
• urgente: true se a prioridade for "alta", senão false.*/

const tarefas = [
    { titulo: "Estudar", status: true, prioridade: "Alta" },
    { titulo: "Trabalhar", status: false, prioridade: "Média" },
    { titulo: "Ver série", status: false, prioridade: "Baixa" }
];

console.table(tarefas)

const tarefasReturn = tarefas.map((tarefa) => {
    let tituloUpper = tarefa.titulo.toUpperCase();

    let statusTexto = ""
    if (tarefa.status === true) {
        statusTexto = "Concluído"
    } else {
        statusTexto = "Pendente"
    }

    let urgente = false;
    let tarefaTexto = tarefa.prioridade.toLowerCase();
    if (tarefaTexto === "alta") {
        urgente = true;
    }

    return {
        titulo: tituloUpper,
        statusTexto: statusTexto,
        urgente: urgente
    }

})

console.table(tarefasReturn)