function processar(){
    let n1 = 5;
    let n2 = 10;
    let res = n1 * n2

    if (res % 2 === 0){
        return "Par";
    } else {
        return "Impar"
    }
}

console.log(processar())