/*2 - Você possui uma lista de cursos com as seguintes propriedades: titulo,
categoria, cargaHoraria, disponivel. O usuário pode buscar um curso pelo
título exato, mas só pode acessá-lo se ele estiver disponível.
Crie uma função que receba a lista e o título do curso, e:
• Encontre o curso.
• Verifique se ele está disponível.
• Retorne uma mensagem adequada.*/

let courses = [
    { title: "HTML e CSS Básico", category: "Programação", hours: 20, available: false },
    { title: "JavaScript para Iniciantes", category: "Programação", hours: 25, available: true },
    { title: "Python do Zero", category: "Programação", hours: 30, available: true },
    { title: "Banco de Dados SQL", category: "Banco de Dados", hours: 22, available: true },
    { title: "MySQL Avançado", category: "Banco de Dados", hours: 28, available: false },
    { title: "Design para Web", category: "Design", hours: 18, available: false },
    { title: "UX/UI Básico", category: "Design", hours: 24, available: false },
    { title: "Figma Essencial", category: "Design", hours: 16, available: true },
    { title: "Lógica de Programação", category: "Programação", hours: 15, available: false },
    { title: "NoSQL com MongoDB", category: "Banco de Dados", hours: 26, available: true }
];

courses.forEach(course => {
    course.title = course.title.toUpperCase();
});

courses.forEach(course => {
    course.category = course.category.toUpperCase();
});

let opcao;
let categoryPrompt = "";

let lista = "";

do {

    opcao = parseInt(prompt(`
        Bem-vindo ao SENAC SP.
        1. Procure um curso.
        2. Listar cursos disponíveis.
        3. Encerrar.

        Escolha uma opção:
        `));

    switch (opcao) {
        case 1:
            let coursePrompt = prompt("Digite o título do curso:");
            coursePrompt = coursePrompt.toUpperCase();

            const courseFind = courses.find(course => course.title === coursePrompt && course.available === true);

            if (courseFind) {
                alert(`
                Cuso encontrado:

                Título: ${courseFind.title}
                Categoria: ${courseFind.category}
                Carga horária: ${courseFind.hours} horas.
        `)

            } else {
                alert("Curso não encontrado/indisponível.");
            }

            break;

        case 2:

            const coursesAvailable = courses
                .filter(course => course.available === true)
                .map(course => {
                    return {
                        title: course.title,
                        category: course.category,
                        hours: course.hours,
                        available: course.available,
                    }
                })

            lista = "Cursos disponíveis:"
            for (let courseFor of coursesAvailable) {
                lista += `\n- ${courseFor.title}`
            }

            if (coursesAvailable.length > 0) {
                alert(lista)
            } else {
                lista = "Nenhum curso disponível, fique de olho no nosso site!"
                alert(lista)
            }
            lista = ""
            break;

        case 3:
            alert("Obrigado por acessar o SENAC SP.");
            break;

        default:
            alert("Opção inválida.")
            break;
    }

} while (opcao !== 3)






