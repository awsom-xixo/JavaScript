function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const jogo = yield 'Qual seu jogo favorito?'
    const banda = yield 'Qual sua banda favorita?'

    return `Seu nome é ${nome}, gosta de ${banda} e joga muito ${jogo}.`
}

const it_perguntas = perguntas();

console.log(it_perguntas.next().value)
console.log(it_perguntas.next('Xixo').value)
console.log(it_perguntas.next('Skate 3').value)
console.log(it_perguntas.next('(hed) P.E.').value)


function* contador(){
    let i = 0;

    while (true){
        yield i++
        if (i > 50){
            break
        }
    }
}

const it_contador = contador();

for (c of it_contador){
    console.log(c)
}