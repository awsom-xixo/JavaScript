// function soma(n1, n2){
//     return n1+n2;
// }

// console.log(soma(10,5));

// Se quisessemos somar mais valores, não seria possível, pois a função só
// tem dois parâmtros. Então criamos uma funcao com parametros rest para resolver isso

function soma(...valores){
    let res = 0;

    for (val of valores){
        res+=val;
    }

    return res;
}

console.log(soma(10,10,10,10,10,10,10));