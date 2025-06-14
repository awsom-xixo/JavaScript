function soma(n1=0, n2=0){ //0 é um valor padrão, ou seja, se um dos parametros
    let res = n1 + n2;     // não for definido, ele assume 0

    return res;

}
let res_soma = soma(122, 654);

console.log(res_soma);


let valor = 0;

console.log(`Antes da função: ${valor}`)
function add(v){
    return v + valor;
}

valor = add(20);
console.log(`Depois da função: ${valor}`)