let max = 1000
let pares = 0;

for (let i = 0; i < max; i++) {

    console.log(`Número: ${i}`);

    if (i % 2 != 0) {
        continue;
    
    }
    
    pares ++;
}

console.log(`Quantidade de números pares: ${pares}`); 