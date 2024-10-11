
//Importando o readline-sync
const readline = require('readline-sync');

//Exemplo: Pedir ao usuario o nome dele
let nome = readline.question("Qual seu nome? ")
let sobrenome = readline.question("Qual seu sobrenome? ")
console.log(`Olá, ${nome} ${sobrenome}. Tudo bem com você?`) //Usar crase qual usar o $