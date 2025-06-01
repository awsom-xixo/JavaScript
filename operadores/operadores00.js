/**
 * Operadores aritméticos em JavaScript:
 *
 * +   : Soma dois valores.
 * -   : Subtrai o segundo valor do primeiro.
 * *   : Multiplica dois valores.
 * /   : Divide o primeiro valor pelo segundo.
 * %   : Retorna o resto da divisão do primeiro valor pelo segundo.
 * ++  : Incrementa o valor em 1.
 * --  : Decrementa o valor em 1.
 * **  : Exponenciação (eleva o primeiro valor à potência do segundo).
 *
 * Operadores de atribuição combinados:
 * +=  : Soma e atribui o resultado à variável.
 * -=  : Subtrai e atribui o resultado à variável.
 * *=  : Multiplica e atribui o resultado à variável.
 * /=  : Divide e atribui o resultado à variável.
 * %=  : Calcula o resto da divisão e atribui à variável.
 */


let num1 = 0, num2 = 0;
let resultado;

// Soma
num1 = 10;
num2 = 5;
resultado = num1 + num2;
console.log(`Soma: ${num1} + ${num2} = ${resultado}`); // 15
// Subtração
num1 = 10;
num2 = 5;
resultado = num1 - num2;
console.log(`Subtração: ${num1} - ${num2} = ${resultado}`); // 5
// Multiplicação
num1 = 10;
num2 = 5;
resultado = num1 * num2;
console.log(`Multiplicação: ${num1} * ${num2} = ${resultado}`); // 50
// Divisão
num1 = 10;
num2 = 5;
resultado = num1 / num2;
console.log(`Divisão: ${num1} / ${num2} = ${resultado}`); // 2
// Resto da divisão
num1 = 10;
num2 = 3;
resultado = num1 % num2;
console.log(`Resto da divisão: ${num1} % ${num2} = ${resultado}`); // 1
// Incremento
num1 = 10;
num1++;
console.log(`Incremento: ${num1}`); // 11
// Decremento
num1 = 10;
num1--;
console.log(`Decremento: ${num1}`); // 9
// Exponenciação
num1 = 2;
num2 = 3;
resultado = num1 ** num2;
console.log(`Exponenciação: ${num1} ** ${num2} = ${resultado}`); // 8
// Atribuição combinada
num1 = 10;
num1 += 5; // num1 = num1 + 5
console.log(`Atribuição combinada (+=): ${num1}`); // 15
num1 -= 3; // num1 = num1 - 3
console.log(`Atribuição combinada (-=): ${num1}`); // 12
num1 *= 2; // num1 = num1 * 2
console.log(`Atribuição combinada (*=): ${num1}`); // 24
num1 /= 4; // num1 = num1 / 4
console.log(`Atribuição combinada (/=): ${num1}`); // 6
num1 %= 5; // num1 = num1 % 5
console.log(`Atribuição combinada (%=): ${num1}`); // 1