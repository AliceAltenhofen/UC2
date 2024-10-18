//const base1 = 10;
//const altura1 = 3;

//const area1 = base1*altura1;
//console.log(area1)

//const base2 = 5;
//const altura2 = 2
//const area2 = base2*altura2;
//console.log(area2)

//funçoes executamuma determinada tarefaque criamos ela pra fazer
//primeiro precisamos criar a funçao e depois de criada precisamos executala/chama-la

//para criar a funçao usamos a palavra "function"
//depois dela, precisamos dar um nome para a funçao. o melhor é q seja um nome bem descritivoseguindo 
//o padrao camelCase
//depois do nome abrimos e fechamos parentese. é aqui que colocamos as variaveis que vamos usar 
//dentro do nosso codigo da funçao chamamos elas de parametros/argumentos.
//depois dos parenteses abrimos e fechamos chaves. Dica: de um enter entre as chaves.
//detro das chaves é onde vamos criar o codigo que a funçao vai executar.

function calculaAreaRetangulo (base,altura) {
    const area1 = base*altura
    console.log(area1)
}

calculaAreaRetangulo (9,6) //esta chamando a funçao e executando o que esta inserido nela e estamos
//adicionando os valores de base e altura dentro do parentese.

//function frase() {
//    console.log("Olá, galera")
//}

//frase()

//quero criar uma funçao que retorna a seguinte frase: Olá [nome] você tem [idade] anos e tem [altura] de altura.

function frase(nome,anos,altura) {
    console.log(`Olá ${nome}, você tem ${anos} e ${altura} de altura,`)
}

frase("Leonardo", 29, 1.70)

                    

