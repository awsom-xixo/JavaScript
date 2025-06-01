// Loop for
// Repetições são chamadas de iterações
// Loops podem ser definidos ou indefinidos dependendo da condição de parada
// for é um loop definido, pois sabemos quantas vezes ele vai iterar
// Já while e do while são loops indefinidos, pois não sabemos quantas vezes eles vão iterar

// Sintaxe do loop for:
// for (inicialização; condição; controle) {
//     // código a ser executado
// }

for (let i=1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Número par: ${i}`);
    } else {
        console.log(`Número ímpar: ${i}`);
    }
}



