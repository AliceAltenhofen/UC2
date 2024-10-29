/*
Para este exercicio, comece criando um array com os valores: 1, 2, 3, 4, 5 e 6
Determine o tamanho da array
Adicione o numero 7
Remova os numeros 4 e 5 
Determine o novo tamaho da array

*/

const numeros = [1,2,3,4,5,6]

console.log(numeros.length) //Determine o tamanho da array

numeros.push(7) //Adicione o numero 7
console.log(numeros)

numeros.splice(3,2) //Remova os numeros 4 e 5 
console.log(numeros)

console.log(numeros.length) //Determine o tamanho da array