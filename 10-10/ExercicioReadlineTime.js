const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let Time = readline.question("Qual seu time? ")
//console.log(Time.toUpperCase()) // transforma o q foi digitado em tudo maiusculo
//console.log(Time.toLowerCase()) // o q foi digitado fica todo minusculo
if (Time.toLowerCase() === "gremio") {
    console.log ("Maior do Sul")
}
else if (Time.toLowerCase() === "internacional") { //o comando transforma em minusculo
    console.log("Menor do Sul")
}
else if (Time.toLowerCase() === "juventude") { //o comando transforma em minusculo
    console.log("Segundo maior do Estado")
}
else if (Time.toLowerCase() === "corinthians") { //o comando transforma em minusculo
    console.log("Maior de São Paulo")
}
else {
    console.log("Time não conhecido")
}
