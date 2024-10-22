//Faça um contador que va de 10 até 0
//Quando o contado for ZERO, imprime BOOOOM
//Quando o contador for par, imprime TIC
//Quando o contador for impar, imprime TAC

for(let contador = 10; contador >= 0; contador = contador - 1) {
    if(contador === 0) {
        console.log("BOOOOOOOOOOOOM")
    }
    else if (contador % 2 === 0) {
        console.log("TIC")
    }
    else {
        console.log("TAC")
    }
}