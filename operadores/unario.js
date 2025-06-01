// Operador Unário

let v1 = 10;
let v2 = "10";
let v3 = v1 === v2;
let v4 = v1 == v2;
let v5 = {nome: "João", idade: 30}; 

// Operador unário typeof

console.log(v1); 
console.log(v2);
console.log(v3);
console.log(v4); 
console.log(v5);

console.log(`Tipo de "${v1}":   ${typeof(v1)}`); // number (não há distinção entre inteiro e float)
console.log(`Tipo de "${v2}":   ${typeof(v2)}`); // string
console.log(`Tipo de "${v3}":   ${typeof(v3)}`); // boolean
console.log(`Tipo de "${v4}":   ${typeof(v4)}`); // boolean
console.log(`Tipo de "${v5}":   ${typeof(v5)}`); // object