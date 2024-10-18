//Criar uma funçao que gere uma saudaçao personalizada e retorne o resultado.

function saudacaoPersonalizada(nome,sobrenome,anos,curso) {
    return `Olá ${nome} ${sobrenome}, você tem ${anos} anos e cursa ${curso}`
}

console.log(saudacaoPersonalizada("Alice","Altenhofen",22,"Técnico em Desenvolvimento de Sistemas"))


//Criar uma funçao que recebe uma temperatura em graus Celsius e retorna ela em Fahrenheit.
//(multiplicar por 1,8 e somar com 32)

/*
function converteCelsiusEmFahrenheit (temperatura) {
    const conversao = (temperatura * 1.8) + 32
    return `${temperatura} graus Celsius equivale a ${conversao} Fahreheit.`
}
console.log(converteCelsiusEmFahrenheit(20))
*/


//outro jeito de fazer abaixo:
//Assim se retorna mais de um valor

function converteCelsiusEmFahrenheit (temperatura) {
    const conversao = (temperatura * 1.8) + 32
    return {temperatura, conversao}
}
const {temperatura, conversao} = converteCelsiusEmFahrenheit(30)
console.log(`${temperatura} graus Celsius equivale a ${conversao} Fahreheit.`)
