//Crie uma funçao que recebe um valor em horas e passa ele pra segundos

function converteHorasEmSegundos (hora) {
    const conversao = hora * 3600
    console.log(`${hora} hora(s) é igual a ${conversao} segundos.`)
}

converteHorasEmSegundos(2)




//Crie uma funcao  que recebe 3 notas e calcule a média delas

function calculoMedia (nota1,nota2,nota3) {
    const media = (nota1+nota2+nota3)/3
    console.log(`A sua media é ${media}.`)
}

calculoMedia (10,10,7)


//Crie uma funcao  que recebe 3 notas e calcule a média delas COM readline

/*
const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let nota1 = readline.questionInt("Qual sua primeira nota? ")
let nota2 = readline.questionInt("Qual sua segunda nota? ")
let nota3 = readline.questionInt("Qual sua terceira nota? ")

function calculaMedia () {
    const soma = (nota1+nota2+nota3)
    const media = (soma/3)
    console.log(`Sua media é ${media}.`)
}

calculaMedia ()

*/


//Crie uma funcao que receba um numero e mostre se ele é par ou se é impar.

function parOuImpar(numero) {
    if(numero === 0) {
        console.log("O número é zero")
    } else if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`)
    } else (
        console.log(`O número ${numero} é impar.`)
    )
}

parOuImpar(11)


function calculaSoma (num1,num2) {
    let soma = num1 + num2
    return soma   // retorna o valor pra ele ser usado fora da funçao
}
let numero = calculaSoma(5,7)
console.log(numero + 10)



