/*
1) Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:  O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

>  **Dica**
> 
> Você pode fazer isso de duas formas:
> - Concatenando as strings (com o sinal de `+`)
> - Utilizando template strings (e envelopando a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)

*/


const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let nomeDoUsuario = readline.question("Qual seu nome? ")
let emailDoUsuario = readline.question("Qual seu email? ")

console.log(`e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}!`)



/*
2)Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

*/


const comidasFavoritas = ["Pizza", "Hamburguer", "Panqueca", "Pastel", "Arroz com batata"]

console.log(comidasFavoritas)

console.log("Essas são minhas comidas favoritas:", comidasFavoritas)

const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let comidaFavoritaDoUsuario = readline.question("Qual sua comida favorita? ")

comidasFavoritas[1] = comidaFavoritaDoUsuario

for(let looping = 0; looping < comidasFavoritas.length; looping++){
    console.log(comidasFavoritas[looping])  //usado para quebra de linha
}
  




/*
3)Faça um programa, seguindo os passos:
a) Crie um array vazio (ou seja, sem itens dentro dele) e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **número** de uma tarefa que ele já realizou: 1, 2 ou 3 

e) Remova da lista a tarefa que o usuário escolheu.

f) Imprima o array no console

> **Dica**
> 
> Para remover um item de um array, você pode utilizar a função `splice`!  

*/



const listaDeTarefa = []

const readline = require('readline-sync'); //trazendo a biblioteca pra esse arquivo

let tarefa1DoUsuario = readline.question("Qual sua primeira atividade diaria a ser realizada? ")

listaDeTarefa.push(tarefa1DoUsuario)

let tarefa2DoUsuario = readline.question("Qual sua segunda atividade diaria a ser realizada? ")

listaDeTarefa.push(tarefa2DoUsuario)

let tarefa3DoUsuario = readline.question("Qual sua terceira atividade diaria a ser realizada? ")

listaDeTarefa.push(tarefa3DoUsuario)

console.log(listaDeTarefa)

let tarefaRealizada = readline.question("Digite o numero da atividade que voce ja realizou hoje (de 1 a 3): ")
 

listaDeTarefa.splice(tarefaRealizada - 1,1)

console.log(listaDeTarefa)




 