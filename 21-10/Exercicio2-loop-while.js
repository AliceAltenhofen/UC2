//Exercicio 2:usando o loop while, faça um codigo que imprima apenas os numeros pares de 1 a 100

let numero = 2 // vamos partir do 2 pq ele é o primeiro par

//while (numero<=100) {
    //console.log(numero)
    //numero = numero + 2 // os numero pares sao a cada 2, ex: 2 - 4 - 6 - 8 ...
//}


while (numero<=100) {
    if (numero % 2 === 0){
        console.log(numero)
    }
    numero = numero + 1
}