// Usando switch case, peça para o usuario inserir um numero
//Caso seja 1, imprima "Você escolheu Red Dead Redemption II"
//Caso seja 2, imprima "Você escolheu The Elder Scrolls V: Skyrim"
//Caso seja 3, imprima "Você escolheu Mass Effect 3"
//Caso o numero seja qlq outra coisa, imprima "Nâo encontrei o jogo"

const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let numero = readline.questionInt("Escolha um numero: ") //usa Int pq um numero inteiro deve ser digitado

switch(numero) {
    case 1:
        console.log("Você escolheu Red Dead Redemption II.")
    break
    case 2:
        console.log("Você escolheu The Elder Scrolls V: Skyrim.")
    break
    case 3:
        console.log("Você escolheu Mass Effect 3.")
    break
    default: //funciona como ELSE
        console.log("Não encontrei o jogo.") 
    break
}