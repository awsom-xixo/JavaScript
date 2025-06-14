const somaValores = (...valores) => {
    let res = 0;
    for (v of valores){
        res+=v;
    }

    return res;
}

const somaSimples = (n1, n2) => {return n1+n2}

const nome = n => n;

const add = v => v+10;

console.log(nome('teste'))

console.log(add(30))