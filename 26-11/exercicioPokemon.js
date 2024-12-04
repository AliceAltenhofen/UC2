
const readlineSync = require('readline-sync');

const pokemonsDisponiveis = [
    {nome: "Arceus", tipo: "Normal", nivel:98},
    {nome: "Eevee", tipo: "Normal", nivel:76},
    {nome: "Squirtle", tipo: "Agua", nivel:44},
    {nome: "Bulbasaur", tipo: "Grama Venenoso", nivel:32},
    {nome: "Charmander", tipo: "Fogo", nivel:27}, 
    {nome: "Pikachu", tipo: "Eletrico", nivel:5},
]


let pokemonsNaMochila = []



function adicionarPokemon () {
    console.log("Escolha um pokemon pra adicionar na mochila:")
    for (let i=0; i <pokemonsDisponiveis.length; i++) {
        console.log(`${i+1}.${pokemonsDisponiveis[i].nome}`)
    } 

    const escolha = readlineSync.questionInt("Digite o numero do pokemon: ");

    if (pokemonsNaMochila.length<6) {
        const pokemonEscolhido = pokemonsDisponiveis[escolha-1];
        pokemonsNaMochila.push(pokemonEscolhido);
        pokemonsDisponiveis.splice(escolha-1,1)
        console.log(`${pokemonEscolhido.nome} foi adicionado a sua mochila!`);}
    else {
        console.log("Escolha invalida!")
    }       
}


function verPokemonsnaMochila () {
    console.log("Pokemons na sua mochila:");
    for (let i=0; i<pokemonsNaMochila.length; i++) {
        console.log(`${i+1}.${pokemonsNaMochila[i].nome}`)}
}


function removerPokemon () {
    console.log("Escolha um pokemon para remover da sua mochila:")
    for (let i = 0; i < pokemonsNaMochila.length; i++) {
        console.log(`${i+1}.${pokemonsNaMochila[i].nome}`)}
    
    const remova = readlineSync.questionInt("Digite o numero do pokemon a ser removido:");
    
    const pokemonRetirado = pokemonsNaMochila[remova-1];
    pokemonsNaMochila.splice(remova-1, 1);
    console.log(`${pokemonRetirado.nome} foi removido da sua mochila!`);
}
     




function exibirMenu() {
    let opcao;
    //enquanto a opcao nao for 3 (sair), o loop continuara
    while(true) {
        //Exibir o menu e capturar a entrada do usuario
        opcao = readlineSync.questionInt("1.Adicionar Pokemon na mochila:\n2. Ver Pokemom na mochila\n3. Remover Pokemon da mochila\n4. Sair\n")
        
        switch(opcao) {
            case 1:
                adicionarPokemon()
                break;
            case 2:
                verPokemonsnaMochila()
                break;
            case 3:
                removerPokemon();
                break;
            case 4:
                console.log("Saindo...")
                return
            default:
                console.log("Opcção inválida!");
                break;   
        }
    }
}


//chamar a funçao para exibir o menu
exibirMenu();
