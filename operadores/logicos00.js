/*
 * Operadores Lógicos
 *
 * || : OR  (Retorna verdadeiro se pelo menos uma das condições for verdadeira)
 * && : AND (Retorna verdadeiro somente se todas as condições forem verdadeiras)
 * !  : NOT (Inverte o valor lógico, ou seja, true vira false e vice-versa)
 */

const a = true;
const b = false;
const c = true;
const d = false;
const e = true;
const f = false;
// OR (||)
const orResult1 = a || b; // true
const orResult2 = b || c; // true
const orResult3 = d || e; // true
const orResult4 = f || a; // true
// AND (&&)
const andResult1 = a && b; // false
const andResult2 = b && c; // false
const andResult3 = d && e; // false
const andResult4 = f && a; // false
// NOT (!)
const notResult1 = !a; // false
const notResult2 = !b; // true
const notResult3 = !c; // false
const notResult4 = !d; // true
const notResult5 = !e; // false
const notResult6 = !f; // true

console.log("Resultados dos Operadores Lógicos:");
console.log("OR (||):");
console.log(`a || b: ${orResult1}`);
console.log(`b || c: ${orResult2}`);
console.log(`d || e: ${orResult3}`);
console.log(`f || a: ${orResult4}`);
console.log("AND (&&):");
console.log(`a && b: ${andResult1}`);
console.log(`b && c: ${andResult2}`);
console.log(`d && e: ${andResult3}`);
console.log(`f && a: ${andResult4}`);
console.log("NOT (!):");
console.log(`!a: ${notResult1}`);
console.log(`!b: ${notResult2}`);
console.log(`!c: ${notResult3}`);
console.log(`!d: ${notResult4}`);
console.log(`!e: ${notResult5}`);
console.log(`!f: ${notResult6}`);