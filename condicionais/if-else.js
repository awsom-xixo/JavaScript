// Condicional if
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}

// Condicional if-else
let idade2 = 16;
if (idade2 >= 18) {
    console.log("Você é maior de idade.");
}
else {
    console.log("Você é menor de idade.");
}

// Condicional if-else if-else
let idade3 = 15;
if (idade3 >= 18) {
    console.log("Você é maior de idade.");
}
else if (idade3 >= 16) {
    console.log("Você é maior de idade, mas não pode dirigir.");
}
else {
    console.log("Você é menor de idade.");
}

// Condicional if-else aninhado
let idade4 = 20;
if (idade4 >= 18) {
    console.log("Você é maior de idade.");
    if (idade4 >= 21) {
        console.log("Você pode beber álcool.");
    } else {
        console.log("Você não pode beber álcool.");
    }
}