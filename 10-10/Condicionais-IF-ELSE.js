let temCarteira = false  //Boolean
let maiorIdade = 29 >= 18    //o primeiro numero é a idade da pessoa 

//Se - If
if( temCarteira === true && maiorIdade === true) {
    console.log("Você tem carteira e é maior de idade, então pode dirigir.")  //Dentro das chaves vai o codigo q quer executar,
    //somente se ocorrer a condiçao
}
else if( maiorIdade === true) {
    console.log("Você é de maior mas não tem carteira")
}
else{
    console.log("Você não tem carteira, não pode dirigir.") 
}

//Qnd o comparador for esse: ===
//podemos substituir o if, else if e else
//por SWITCH CASE
//SWITCH CASE só fuciona para o comando de igual (===)

