let dia = 9;
let nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda";
        break;
    case 3:
        nomeDia ="Terça";
        break;
    case 4:
        nomeDia = "Quarta";
        break;
    case 5: 
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;

    default:
        nomeDia = "Dia inválido.";
        break;
}

console.log(nomeDia);