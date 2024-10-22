//Exercicio 3:usando o loop while e readline-sync imprima a tabuada de um numero.

const readline = require('readline-sync'); // importando a biblioteca
let numero = readline.question("Digite um numero para ver sua tabuada: ")
let multiplicador = 1
let resultado 


while(multiplicador<=10) {
    resultado = numero * multiplicador
    console.log(`${numero} X ${multiplicador} = ${resultado}`)
    multiplicador = multiplicador + 1
}

