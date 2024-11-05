//variavem é uma gaveta que guarda so um 1 item
//objeto é como um armario, onde tem varios itens e gavetas nele, ou seja armazena varias variaveis

//como criar objetos
let pessoa = { //objeto que representa uma pessoa
    //atributos/propriedades
    //nao se usa let nem const
    //nos usamos ':' ao inves de '='
    nome: "Leonardo", 
    idade: 29,
    cpf: 99999999999,
    filmesFavoritos: ["Senhor dos Aneis", "Gladiador", "Star Wars"],

    //funcao criadas dentro de objetos podem ser chamadas de metodos
    trabalhar: function() {
        console.log(`${pessoa.nome} esta trabalhando. Ele nao ve a hora de chegar em casa e jogar.`)
    }  
}
console.log(pessoa) //imprime tudo

//para acessar so um dos atributos

console.log(pessoa.nome) //imprme so o atributo nome
console.log(pessoa.filmesFavoritos[0]) //imprime senhor dos aneis


//para trocar o valor de um atributo fazemos como abaixo
pessoa.idade = 30 //dando o novo valor de 30 na idade
console.log(pessoa.idade)

pessoa.altura = 1.70 //para adicionar um atributo
console.log(pessoa.altura) //imprime o novo atributo adcionado


console.log(pessoa) //imprime todo o obj para vermos as alteraçoes

pessoa.trabalhar() //aqui eu chamo/executo a funcao do meu objeto. Imprime na tela Leonardo esta 
//trabalhando. ele nao ve a hora de chegar em casa e jogar.