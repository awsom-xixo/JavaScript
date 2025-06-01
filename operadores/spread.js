/*
* Operador Spread
*/
let jogador = { nome: 'João', vida: 50, mana: 20}
let jogador1 = { nome: 'Cleber', vida: 20, velocidade: 10}
let jogador2 = {...jogador, ...jogador1};

let array1 = [10, 20, 30];
let array2 = [10, 20, 30, 40, 50];
let array3 = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(array3);

console.log(jogador2);

/*
 * O que aconteceu com jogador2?
 * 
 * O objeto jogador2 foi criado usando o operador spread (...), que copia as propriedades dos objetos jogador e jogador1.
 * Como ambos têm a propriedade "nome" e "vida", os valores de jogador1 sobrescrevem os de jogador.
 * Além disso, as propriedades incomuns de cada array,  são adicionadas ao jogador 2
 * Portanto, jogador2 ficou assim:
 * { nome: 'Cleber', vida: 20, mana: 20, velocidade: 10 }
 */

let valores = [20, 50 ,43];

function somar(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(somar(...valores));
