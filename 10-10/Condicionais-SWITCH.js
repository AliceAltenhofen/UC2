//Qnd o comparador for esse: ===
//podemos substituir o if, else if e else
//por SWITCH CASE
//SWITCH CASE só fuciona para o comando de igual (===)

const readline = require('readline-sync');
let Time = readline.question("Qual seu time? ")
switch(Time) {
    case "gremio":
        console.log("O seu time é o Gremio.")
    break
    case "Inter":
        console.log("O seu time é o inter.")
    break
    case "Juventude":
        console.log("O seu time é o juventude.")
    break
    case "Corinthians":
        console.log("O seu time é o corinthians.")
    break
    default: //funciona como ELSE
        console.log("o time não foi reconhecido.") 
    break
}