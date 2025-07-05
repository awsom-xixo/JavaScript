// Função construtora que cria um objeto aluno com nome e nota
function aluno(nome, nota) {
    // Define propriedades do objeto usando this (vai pertencer ao novo aluno criado)
    this.nome = nome
    this.nota = nota

    // Método usando função anônima comum dentro de setTimeout
    this.dadosAnonimo = function() {
        setTimeout(function(){ 
            // Aqui, o this NÃO aponta para o aluno
            // Dentro de uma função comum, o this depende de quem a chamou
            // E como setTimeout chama a função de forma "independente", o this é global
            // Resultado: this.nome e this.nota são undefined
            console.log(`Nome: ${this.nome} - Nota: ${this.nota}`)
        }, 2000)
    }

    // Método usando arrow function dentro de setTimeout
    this.dadosArrow = function() {
        setTimeout(()=>{ 
            // Aqui, o this é herdado do escopo onde a arrow function foi criada
            // Como ela foi criada dentro da função 'aluno', e 'this' aqui é o próprio aluno,
            // então funciona corretamente
            console.log(`Nome: ${this.nome} - Nota: ${this.nota}`)
        }, 2000)
    }
}

// Cria um novo objeto aluno com nome "Xixo" e nota 96.0
const aluno1 = new aluno("Xixo", 96.0)

// Chama o método com função anônima (vai dar undefined no this)
aluno1.dadosAnonimo()

// Chama o método com arrow function (this funciona corretamente)
aluno1.dadosArrow()
