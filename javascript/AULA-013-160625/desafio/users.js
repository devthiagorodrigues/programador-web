/*1 - Você tem uma lista de usuários cadastrados em uma plataforma. Cada
usuário possui: nome, idade, ativo (booleano) e type (como "admin" ou
"comum"). Crie uma função que retorne todos os usuários ativos com idade
acima de 18 anos que não sejam administradores.*/

const users = [
    { name: "Thiago", age: 19, active: true, access: "admin" },
    { name: "Mariana", age: 21, active: true, access: "comum" },
    { name: "Esthefany", age: 19, active: true, access: "comum" },
    { name: "Gerusa", age: 17, active: true, access: "comum" },
    { name: "Heitor", age: 19, active: true, access: "comum" },
    { name: "João", age: 15, active: true, access: "comum" },
    { name: "Felipe", age: 18, active: false, access: "comum" },

    { name: "Paula", age: 25, active: true, access: "admin" },
    { name: "Lucas", age: 22, active: false, access: "comum" },
    { name: "Rafael", age: 33, active: true, access: "comum" },
    { name: "Beatriz", age: 30, active: false, access: "admin" },
    { name: "Amanda", age: 27, active: true, access: "comum" },
    { name: "Carlos", age: 40, active: true, access: "admin" },
    { name: "Juliana", age: 16, active: true, access: "comum" },
    { name: "Mateus", age: 29, active: false, access: "comum" },

    { name: "Fernanda", age: 24, active: true, access: "comum" },
    { name: "Pedro", age: 35, active: true, access: "admin" },
    { name: "Sofia", age: 20, active: false, access: "comum" },
    { name: "André", age: 38, active: true, access: "comum" },
    { name: "Camila", age: 32, active: false, access: "admin" },
    { name: "Isabela", age: 26, active: true, access: "comum" },
    { name: "Henrique", age: 23, active: true, access: "admin" },
    { name: "Ana", age: 19, active: false, access: "comum" },
    { name: "Vitor", age: 21, active: true, access: "comum" },
    { name: "Ricardo", age: 45, active: false, access: "admin" },
];


const UserActive = users.filter(user => 
    user.active === true && user.age >= 18 && user.access === "comum"
)

console.table(UserActive)