const caixa1 = document.getElementById('caixa1');
const caixa2 = document.getElementById('caixa2');
const botaoCopiar = document.getElementById('btn_copiar');
const cursos = [...document.getElementsByClassName('curso')];


// Dá a funcionalidade de Seleção de elementos com addEventListener:
cursos.forEach(curso => {
    curso.addEventListener('click', (evento) => {
        const elemento = evento.target;
        elemento.classList.toggle('selecao');
    });
});

botaoCopiar.addEventListener('click', (evento) => {
    const cursosSelec1 = [...document.querySelectorAll('#caixa1 div.selecao')];
    const cursosSelec2 = [...document.querySelectorAll('#caixa2 div.selecao')];

    if(cursosSelec1 == [] && cursosSelec1 == []) return;

    if (!(cursosSelec1 == [])) {
        cursosSelec1.forEach(selecao => {
            caixa2.appendChild(selecao);        
        });
    };

    if (!(cursosSelec1 == [])) {
        cursosSelec2.forEach(selecao => {
            caixa1.appendChild(selecao);        
        });
    };
});