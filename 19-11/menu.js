const readlineSync = require('readline-sync');

function imprimeFrase () {
    console.log("Olá, tudo bem com voce?")
}

function calculaSoma () {
    console.log(`A soma de 5 + 5 é ${5+5}`)
}

function exibirMenu() {
    let opcao;
    //enquanto a opcao nao for 3 (sair), o loop continuara
    while(true) {
        //Exibir o menu e capturar a entrada do usuario
        opcao = readlineSync.questionInt("Escolha uma opção:\n1. Exibir Imprimir frase\n2. Exibir Calcular soma\n3. Sair\n")
        
        switch(opcao) {
            case 1:
                imprimeFrase()
                break;
            case 2:
                calculaSoma()
                break;
            case 3:
                console.log("Saindo...");
                return; //encerra a funçao, saindo do loop
            default:
                console.log("Opcção inválida!");
                break;   
        }
    }
}

//chamar a funçao para exibir o menu
exibirMenu();