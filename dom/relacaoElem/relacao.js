const btn_c1 = [...document.getElementsByClassName('curso')];
console.log(btn_c1);
const caixa1 = document.getElementById('caixa1');
console.log(caixa1);

console.log(btn_c1[0].hasChildNodes());         // retornará true, mas por causa de um node 'text'
console.log(caixa1.hasChildNodes());

// if (btn_c1[0].children.length > 0) {
//     console.log('Possui filhos.')

// } else {
//     console.log('Não possui filhos.')

// }

console.log((caixa1.children.length > 0) ? 'Possui filhos.' : 'Não possui filhos.');

console.log(caixa1.children[5].innerHTML = "Teste");