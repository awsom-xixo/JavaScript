/*
 * Operadores Bitwise
 * Operadores bitwise são usados para realizar operações em nível de bit em números inteiros.
 * Eles operam diretamente nos bits dos números, permitindo manipulações de baixo nível.
 * Os principais operadores bitwise são:
 * &  : AND bit a bit (retorna 1 se ambos os bits forem 1)
 * |  : OR bit a bit (retorna 1 se pelo menos um dos bits for 1)
 * ^  : XOR bit a bit (retorna 1 se os bits forem diferentes)
 * ~  : NOT bit a bit (inverte todos os bits)
 * << : Deslocamento à esquerda (move os bits para a esquerda, preenchendo com zeros)
 * >> : Deslocamento à direita (move os bits para a direita, preservando o sinal)
 * >>>: Deslocamento à direita sem sinal (move os bits para a direita, preenchendo com zeros)
 */


let a = 10; // Binário: 1010
let b = 11; // Binário: 10101
let result = a & b;

console.log(`AND bit a bit (a & b): ${result}`); // Resultado: 10 (Binário: 1010)

/*
* O que aconteceu????
* 
* Imagine uma tabela de verdade para o operador AND
* onde cada bit de 'a' e 'b' é comparado um a um:
*
*        a:  00001010
*        b:  00001011
* --------------------
* resultado: 00001010
*
* Vamos analisar bit a bit:
* a0 & b0 = 0* (os quatro primeiros bits do resultado são 0)
* a1 & b1 = 1* (o quinto bit do resultado é 1, pois ambos os quintos bits de a e b são 1)
* a0 & b0 = 1* (o sexto bit do resultado é 0)
* a1 & b1 = 1* (o sétimo bit do resultado é 1)
* a0 & b1 = 0* (o oitavo bit do resultado é 0, já que só retorna 1 se ambos os bits forem 1)
* 
* Assim, chegamos na representação binária do resultado:
* result: 00001010
* E, quando imprimimos o resultado, ele é convertido para decimal, resultando em 10.
*/

result = a | b;
console.log(`OR bit a bit (a | b): ${result}`); // Resultado: 11 (Binário: 1011)

// Deslocamento à esquerda
result = a << 1; // Desloca os bits de 'a' para a esquerda em 2 posições
console.log(`Deslocamento à esquerda (a << 1): ${result}`); // Resultado: 40 (Binário: 101000)
// Deslocamento à direita
result = a >> 1; // Desloca os bits de 'a' para a direita em 2 posições
console.log(`Deslocamento à direita (a >> 1): ${result}`); // Resultado: 2 (Binário: 0010)
// Deslocamento à direita sem sinal
result = a >>> 1; // Desloca os bits de 'a' para a direita em 2 posições, preenchendo com zeros
console.log(`Deslocamento à direita sem sinal (a >>> 1): ${result}`); // Resultado: 2 (Binário: 0010)