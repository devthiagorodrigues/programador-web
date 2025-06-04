/*1 - Numa eleição existem três candidatos. Faça um programa que peça
o número total de eleitores. Peça para cada eleitor votar e ao
final mostrar o número de votos de cada candidato.*/

let totalEleitores = Number(prompt(`
    Olá mesário, digite quantos eleitores irão votar neste plenário:
`));

let nunes = 0;
let boulos = 0;
let marcal = 0;
let votosAnulados = 0;

let i = 1;

while (i <= totalEleitores) {
    console.log(i);
    
    alert(`Eleitor ${i}: Aperte OK para iniciar o voto.`);    

    let voto = prompt(`
        Para votar em Nunes, digite: N
        Para votar em Boulos, digite: B
        Para votar em Marçal, digite: M
        Para anular seu voto, digite qualquer tecla.
    `);

    let votoContabilizado = voto.toUpperCase();

    if (votoContabilizado === "N") {
        nunes++;
    } else if (votoContabilizado === "B") {
        boulos++;
    } else if (votoContabilizado === "M") {
        marcal++;
    } else {
        votosAnulados++;
    }

    alert("Voto contabilizado. TSE agradece!");
    i++;
}

alert(`
    Eleição finalizada.
    Resultado da votação:
    Nunes: ${nunes}
    Boulos: ${boulos}
    Marçal: ${marcal}
    Votos anulados: ${votosAnulados}
`);