let filmes = [
    { titulo: "Vingadores", genero: "Ação" },
    { titulo: "Up - Altas aventuras", genero: "Animação" },
    { titulo: "Como Eu Era Antes de Você", genero: "Comédia" },
    { titulo: "Cruela", genero: "Drama" },
    { titulo: "Superman", genero: "Ficção Cientifica" },
];

let generoBuscado = prompt(`Qual gênero de filme você deseja assistir?`);

if (generoBuscado) {
    let encontrou = false;
    let resultado = `Filmes do gênero "${generoBuscado}"\n\n`;

    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].genero.toLowerCase() === generoBuscado.toLowerCase()) {
            resultado += `- ${filmes[i].titulo}\n`;
            encontrou = true;
        }
    }

    if (encontrou) {
        alert(resultado)
    } else {
        alert(`Desculpe, não encontramos filmes do gênero "${generoBuscado}".`)
    }
} else {
    alert("Nenhum gênero informado.")
}