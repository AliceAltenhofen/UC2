
//crie um objeto que representa um personagem que voce gosta
//de um nome a ele, uma idade, liste poderes ou caracteristicas
//crie um metodo qe seja algo que esse personagem faz
//acesse cada um desses atributos e o metodo cada um em um console

//lembrando q atributo é o q ele tem e metodo o q ele faz

let homemAranha = { 
    nome: "Peter Parker", 
    idade: 16,
    poderes: ["Força", "Sentido", "Lançar teia"],
    trabalho: function() {
        console.log(`${homemAranha.nome} trabalha como fotografo e salva a cidade como Homem Aranha.`)
    }  
}
console.log(homemAranha.nome) 
console.log(homemAranha.idade)
console.log(homemAranha.poderes)  
homemAranha.trabalho() 