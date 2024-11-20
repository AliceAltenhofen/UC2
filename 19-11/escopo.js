/*
let nome = "Leonardo"
function imprimeFrase () {
    let nome = "Leonardo"
    console.log(`Olá ${nome}, tudo bem`)
}

console.log(nome) //vai dar erro pq ta dentro da funcao
*/
//a variavel nome existe somente dentro da funçao
//ela so pode ser acessada dentro da funçao

//so roda se colocr uma variabvel nome fora da funçao


function imprimeFrase () {
    let nome = "Leonardo"
    console.log(`Olá ${nome}, tudo bem`)
    function imprimeEcalcula (){
        let numero1 = 2
        let numero2 = 5
    console.log(`Olá ${nome}, o resultado da soma é ${numero1 +numero2}`)}
    }


    imprimeFrase ()


    let nome = "Joana"

    function imprimeFrase() {
        let nome = "Leonardo"
        return nome
    }

   nome =  imprimeFrase()

   console.log(nome)



    


