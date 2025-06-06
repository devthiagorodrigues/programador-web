let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let linhas = 0; linhas < matriz.length; linhas++) {
    for (let colunas = 0; colunas < matriz[linhas].length; colunas++) {
        console.log(`Matriz[${linhas}][${colunas}] = ${matriz[linhas][colunas]}`);
    }
}