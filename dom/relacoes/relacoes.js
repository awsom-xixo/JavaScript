const caixa1 = document.querySelector('#caixa1');
const cursos = [...document.querySelectorAll('.curso')];
console.log(caixa1.lastElementChild);                   // Retorna o uíltimo elemento filho
console.log(caixa1.firstElementChild);                  // Retorna o primeiro elemento filho
console.log(caixa1.children);                           // Retorna um HTML Collection
console.log(document.getRootNode());
