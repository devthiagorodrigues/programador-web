const livros = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R Tolkien" },
    { id: 2, titulo: "Duna", autor: "Frank Herbert" },
    { id: 3, titulo: "1984", autor: "George Orwell" },
    { id: 4, titulo: "O Hobbit", autor: "J.R.R Tolkien" },
    { id: 5, titulo: "A Revolução dos Bichos", autor: "George Orwell" },
]

const livroBuscado = livros.find(livro => livro.titulo === "1984");

if (livroBuscado) {
    console.log(`Livro encontrado!`);
    console.log(`Titulo: ${livroBuscado.titulo}`);
    console.log(`Autor: ${livroBuscado.autor}`);
} else {
    console.log("Livro não encontrado.");

}