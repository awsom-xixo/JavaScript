const somaValores = function(...valores){
    let res = 0

    for (v of valores){
        res+=v;
    }

    return res;
}

console.log(somaValores(10,29));


const construtor = new Function("arg1", "arg2", "return arg1 + arg2") // funcao construtor anonima

console.log(construtor(10,29));