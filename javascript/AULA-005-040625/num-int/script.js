/*2 - Crie uma lista com 10 números inteiros. Usando um laço for
e a estrutura if/else, conte quantos são pares e quantos são
ímpares. Ao final, imprima os dois totais.*/

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let par = 0;
let impar = 0;

for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
        par++;
    } else {
        impar++
    }
}

alert(`
    ${par} são pares. ${impar} são ímpares.
    `)