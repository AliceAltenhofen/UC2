let array
console.log('a. ', array) //Imprime: a.

array = null
console.log('b. ', array) //Imprime: b. 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length)  //Imprime: c.11 

let i = 0
console.log('d. ', array[i]) // Imprime: 'd. 3 

array[i+1] = 19  //esta substituindo o numero do indice 1 por 19
console.log('e. ', array) //Imprime: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] 

const valor = array[i+6] 
console.log('f. ', valor) //Imprime: f. 10