
//No começo o ciclista ainda nao deu volta nenhuma
let voltas = 0         //variavel iteradora


//ENQUANTO  o ciclista nao der 10 voltas, ele continua pedalando
//cada iteraçao é uma volta

while (voltas<=10) { //enquanto voltas for menor do q 10
    console.log(`Continue pedalando! Você já deu ${voltas}.`)
    voltas = voltas + 1
}

console.log("Parabéns, você terminou a corrida!")
// oq fica abaixo do while so vai ser lido quando o while terminar
