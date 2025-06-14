const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((value, index) => {
    console.log(value + "-" + index);
})

const fruits = [
    "Apple", "Banana", "Grape"
]

fruits.forEach((fruit, position) => {
    console.log(`${fruit} is position ${position}`);
})

const dobrados = [];

numeros.forEach(num => {
    dobrados.push(num * 2);
})

console.log(dobrados);
