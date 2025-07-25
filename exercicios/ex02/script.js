const caixaCursos = document.querySelector('#caixaCursos');
const btnCursos = [...document.querySelectorAll('.curso')];
const c1_2 = document.getElementById('c1_2');
const cursos = ['JavaScript', 'PHP', 'React.js', 'HTML5', 'CSS3', 'MySQL', 'Git'];
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado');
const btnRemoverCurso = document.getElementById('btnRemoverCurso');
const btnAdicionarNovoAntes = document.getElementById('btnAdicionarNovoAntes');
const btnAdicionarNovoDepois = document.getElementById('btnAdicionarNovoDepois');
const nomeCurso = document.getElementById('nomeCurso');
let indice = 0;


const obterCursoSelecionado = () => {
    const radioButtons = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = radioButtons.filter(rad => rad.checked);
    return radioSelecionado ? radioSelecionado[0] : undefined;

}

const criarCursos = (nomeCurso) => {
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', 'c' + indice);
    novoElemento.setAttribute('class', 'curso c1');
    novoElemento.innerHTML = nomeCurso;

    const comandos = document.createElement('div');
    comandos.setAttribute('class', 'comandos');

    const inputRB = document.createElement('input');
    inputRB.setAttribute('type', 'radio');
    inputRB.setAttribute('name', 'rb_curso');

    comandos.appendChild(inputRB);

    novoElemento.appendChild(comandos);

    return novoElemento;

}

cursos.forEach(c => {
    novoElemento = criarCursos(c);
    caixaCursos.appendChild(novoElemento);
    indice++;

});

btnCursoSelecionado.addEventListener('click', evt => {
    try {
        const radioSelecionado = obterCursoSelecionado();
        if (!radioSelecionado) {
            alert('Selecione um curso primeiro!');
            return;
        }

        const strCursoSelecionado = radioSelecionado.parentNode.parentNode.textContent;
        alert('Curso Selecionado: ' + strCursoSelecionado);
    } catch (erro) {
        console.error("Erro ao selecionar curso:", erro);
        alert("Algo deu errado ao tentar selecionar o curso.");
    }
});

btnRemoverCurso.addEventListener('click', evt => {
    try {
        const radioSelecionado = obterCursoSelecionado();
        if (!radioSelecionado) {
            alert('Selecione um curso primeiro!');
            return;
        }

        const cursoSelecionado = radioSelecionado.parentNode.parentNode;
        cursoSelecionado.remove();
    } catch (erro) {
        console.error("Erro ao remover curso:", erro);
        alert("Não foi possível remover o curso. Tente novamente.");
    }
});

btnAdicionarNovoAntes.addEventListener('click', evt => {
    try {
        const radioSelecionado = obterCursoSelecionado();
        if (!radioSelecionado) {
            alert('Selecione um curso primeiro!');
            return;
        }

        if (nomeCurso.value === '' || !nomeCurso.value){
            alert ('Nome do curso vazio ou precisa ser uma string.');
            return;
        }

        caixaCursos.insertBefore(criarCursos(nomeCurso.value), radioSelecionado.parentNode.parentNode);
        nomeCurso.value = '';
        
    } catch (erro) {
        console.error("Erro ao adicionar curso:", erro);
        alert("Não foi possível adicionar o curso. Tente novamente.");
    }
});

btnAdicionarNovoDepois.addEventListener('click', evt => {
    try {
        const radioSelecionado = obterCursoSelecionado();
        if (!radioSelecionado) {
            alert('Selecione um curso primeiro!');
            return;
        }

        if (nomeCurso.value === '' || !nomeCurso.value){
            alert ('Nome do curso vazio ou precisa ser uma string.');
            return;
        }

        caixaCursos.insertBefore(criarCursos(nomeCurso.value), radioSelecionado.parentNode.parentNode.nextSibling);
        nomeCurso.value = '';
        
    } catch (erro) {
        console.error("Erro ao adicionar curso:", erro);
        alert("Não foi possível adicionar o curso. Tente novamente.");
    }
});