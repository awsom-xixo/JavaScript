const idades = [
    10,2,3,23,34,21,18,16
];

const maiorIdade = idades.filter(v => {         // Pode receber (valor, indice e array) dentro de filter
    if (v >= 18) return v;
});

const menorIdade = idades.filter(v => {
    if (v <= 18) return v;
});

console.log(idades);
console.log(maiorIdade);
console.log(menorIdade);
