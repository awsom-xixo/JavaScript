const caixa1 = document.querySelector('#caixa1');
const btns =[...document.querySelectorAll('.curso')];

caixa1.addEventListener('click', (evento) => {
    console.log('Clicou!');
});

// Se você adiciona um evento em um elemento, ele é aplicado para seus filhos também
// Para resolver esse problema, utilizamos o método stopPropagation

// btn_d1.addEventListener('click', (evento) => {
//     evento.stopPropagation();                       // Isso faz com que 'HTML' não acione mais o console.log
// });

btns.forEach(btn => {
    btn.addEventListener('click', (evento) => {
        evento.stopPropagation();
    });
});