//Arrays sao listas de elementos

const listaDeCompras = []; //este é um array vazio

const listaDeNomes = ["Leo", "Vitoria", "Nala", "Margot", "Simba"]

const listaDeNumeros = [10,15,35,99,2]

const listaDeBooleans = [true,false,true]

//Imprime tudo o que tem dentro da array
console.log(listaDeNomes)
console.log(listaDeCompras)

//Adiciona um item ao final da array
listaDeCompras.push("Pao")
listaDeCompras.push("Nata")
listaDeCompras.push("Iogurte")
console.log(listaDeCompras)

//Remove o ultimo item da array
listaDeCompras.pop()
console.log(listaDeCompras)

//exibe o item de acordo com sua posição no array
console.log(listaDeNomes[0]) //Leo
console.log(listaDeNumeros[3]) //99
console.log(listaDeBooleans[3]) //undefined

//Troca o valor de um elemento no array de acordo com sua posição no indice
console.log("Array antes da troca:", listaDeNumeros)
listaDeNumeros[3] = 100
console.log("Array depois da troca:", listaDeNumeros)

//Propriedade Lenght
//Mostra o tamanho da array
console.log(listaDeNomes.length)
console.log(listaDeNumeros.length)

//Metodos includes
//Verifica se um array tem ou nao determinado elemento(retorna true ou false)
const seriesBoas = ["Game of Thrones", "Breaking Bad", "Shogun"]
console.log(seriesBoas.includes("Game of Thrones")) //retorna true pq tem game of thrones nessa array
console.log(seriesBoas.includes("La Casa de Papel")) //retorna false pq nao tem essa serie nessa array

//Metodo Splice
//Remove n elementos a partir da posição i do array
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
letras.splice(2,1)//o primeiro parametro diz a partir de qual indice começa a a remover
//e o segundo parametro diz quantos ele remove
console.log(letras) //removeu o C

letras.splice(2,2,"Z", "Y")//remove C e D e adiciona Z e Y no lugar
console.log(letras)