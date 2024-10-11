const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let numero = Number(readline.question("Digite um numero: ")) //Colocar number pra converter pra numero
let numero2 = Number(readline.question("Digite outro numero: ")) //Colocar number pra converter pra numero

//let numero2 = readline.questionFloat("Digite outro numero: ") Usar float tb é uma opçao
console.log(numero + numero2)