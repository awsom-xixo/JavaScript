const caixa1 = document.getElementById('caixa1');

cursos = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'React',
    'MySQL',
    'React Native'
]

cursos.map((curso, i) => {
        const novoElemento = document.createElement('div');
        const btn_delete = document.createElement('img');

        novoElemento.classList.add('curso', 'c1')
        novoElemento.setAttribute('id', `c${i+1}`);          // Ou ('id', 'c'+i+1)
        novoElemento.innerText = curso;

        btn_delete.setAttribute('src', '../../img/lixeira.png');
        btn_delete.classList.add('btn_lixeira');
        novoElemento.appendChild(btn_delete);

        btn_delete.addEventListener('click', (evento) => {
            console.log('Removido '+evento.target.parentElement.innerText);
            caixa1.removeChild(evento.target.parentElement);
        });

        caixa1.appendChild(novoElemento);
});