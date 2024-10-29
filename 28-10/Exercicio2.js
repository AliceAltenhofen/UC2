//Criar uma array om 5 raças de cachorro
//Peça par o usuario inserir um numero de 1 a 5 
//imprima no terminal a raça escolhida


const racasDeCachorro = ["Labrador", "Dalmata", "Pitbull", "Poodle", "Boxer"]

const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let numeroEscolhido = Number(readline.question("Digite um numero de 1 a 5: ")) 

console.log("Você escolheu:", racasDeCachorro[numeroEscolhido - 1]) 



