let cinema = [
    ["L", "O", "O", "L"],
    ["O", "O", "L", "L"],
    ["O", "L", "L", "O"],
];

let continuar = true;

while (continuar) {
    let mapa = "MAPA DE ASSENTOS (L - LIVRE, O - OCUPADO) \n\n";

    for (let i = 0; i < cinema.length; i++) {
        mapa += `Fileira ${i + 1}: ${cinema[i].join(" ")}\n`
    }

    alert(mapa);

    let inputFileira = prompt("Informe o número da *fileira* (1 a 3) ou 'sair' para encerrar:");

    if (inputFileira === null || inputFileira.toLowerCase() === "sair") {
        continuar = false;
        break;
    }

    let inputAssento = prompt("Digite o número do *assento* (1 a 3):");

    if (inputAssento === null) {
        continuar = false;
        break;
    }

    let fileira = inputFileira - 1;
    let assento = inputAssento - 1;

    if (
        !isNaN(fileira) && !isNaN(assento) &&
        fileira >= 0 && fileira < cinema.length &&
        assento >= 0 && assento < cinema[1].length
    ) {
        if (cinema[fileira][assento] === "L") {
            cinema[fileira][assento] = "O"
            alert("Assento reservado.")
        } else {
            alert("Este assento já está reservado. 😥")
        }
    } else {
        alert("Posição inválida. ❌")
    }
}

alert ("Obrigado por usar o CineNAC. 🎞📽")