/*
 * Operadores Relacionais
 *
 * Os operadores relacionais são usados para comparar valores e retornam um valor booleano (true ou false).
 *
 * Exemplos:
 */

let a = 10;
let b = 20;

console.log(a > b);   // false - a não é maior que b
console.log(a < b);   // true  - a é menor que b
console.log(a >= b);  // false - a não é maior ou igual a b
console.log(a <= b);  // true  - a é menor ou igual a b
console.log(a == b);  // false - a não é igual a b
console.log(a != b);  // true  - a é diferente de b

// Comparação estrita (leva em conta o tipo)
console.log(a === '10'); // false - tipos diferentes
console.log(a !== '10'); // true  - tipos diferentes