// Criamos um array com algumas linguagens de programação.
const linguagens = [
    'HTML5',
    'CSS3',
    'PHP',
    'JS'
];

// Exemplo comentado: cursos.map((elemento, indice) => )
// Isso seria um modelo base para usar map com dois parâmetros:
// - elemento: o item atual
// - indice: a posição dele no array

// Dica importante: use MAP no lugar do FOR quando quiser percorrer
// todos os elementos e gerar um novo array com transformações.
// Além de mais limpo, é mais otimizado em muitos casos.

// Aqui, estamos apenas percorrendo o array para exibir as linguagens e seus índices.
// Como não estamos criando um novo array, o mais correto seria usar forEach.
linguagens.map((el, i) => {
    console.log(`Linguagem: ${el} - Posição da linguagem: ${i}`);
});

// Agora sim usamos map do jeito certo: criando um novo array.
// Esse array terá elementos HTML com cada linguagem.
let l = linguagens.map((el) => {
    return `<div class="exemplo">`+el+`</div>`; // template string com o nome da linguagem dentro de uma div
});

console.log(l); // Exibe o novo array criado com as <div>s para cada linguagem

// Funções auxiliares:
const converterInt = (elemento) => parseInt(elemento); // converte string em número inteiro
const dobrarEl = (elemento) => elemento * 2; // multiplica o elemento por 2

// Aqui estamos aplicando o map com a função de dobrar elementos
let num = ["1", "2", "3"].map(dobrarEl);

// OBS: a linha abaixo também funcionaria se fosse descomentada
// let num = ["1", "2", "3"].map(converterInt)

console.log(num); // Mostra o array resultante após dobrar: [2, 4, 6]



console.log(`Desafio:`)

const numeros = ["4", "8", "15", "16", "23", "42"];
let spans = numeros.map((el) => {
    const num = parseInt(el);
    return `<span>${num*2}</span>`
})

console.log(`R: ${spans}`);