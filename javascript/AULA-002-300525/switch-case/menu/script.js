let opcao = Number(prompt(`
        Escolha uma opção: \n
        1 - Somar \n
        2 - Subtrair \n
        3 - Multiplicar \n
        4 - Dividir \n
        5 - Sair
    `));

let num1, num2, resultado

switch (opcao) {
    case 1:
        num1 = Number(prompt("Digite o primeiro número:"));
        num2 = Number(prompt("Digite o segundo número:"));
        resultado = num1 + num2;
        alert(`O resultado é da soma é: ${resultado}`);
        break;

    case 2:
        num1 = Number(prompt("Digite o primeiro número:"));
        num2 = Number(prompt("Digite o segundo número:"));
        resultado = num1 - num2;
        alert(`O resultado é da subtração é: ${resultado}`);
        break;

    case 3:
        num1 = Number(prompt("Digite o primeiro número:"));
        num2 = Number(prompt("Digite o segundo número:"));
        resultado = num1 * num2;
        alert(`O resultado é da multiplicação é: ${resultado}`);
        break;

    case 4:
        num1 = Number(prompt("Digite o primeiro número:"));
        num2 = Number(prompt("Digite o segundo número:"));
        if (num1 !== 0 && num2 !== 0) {
            resultado = num1 / num2;
            alert(`O resultado é da divisão é: ${resultado}`);
        } else {
            alert("A divisão não pode ser realizada com zero.")
        }
        break;

        case 5:
            alert("Saindo do programa...");
            break;

    default:
        alert("Opção inválida.")
        break;
}

