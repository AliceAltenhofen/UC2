
//1)Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array  
console.log('a. ', array) //Imprime: a. undefined 
//pq nao foi dado um valor pra variavel "array"

array = null
console.log('b. ', array) //Imprime: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //Imprime: c. 11

let i = 0
console.log('d. ', array[i]) //Imprime: d. 3

array[i+1] = 19
console.log('e. ', array) //Imprime: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] pq foi dado um novo 
//valor pro indice 1 (que antes era 4)

const valor = array[i+6] 
console.log('f. ', valor) //Imprime: f. 9