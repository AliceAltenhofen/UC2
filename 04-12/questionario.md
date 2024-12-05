# Exercícios de JavaScript

## Questões de Escolha Múltipla

### Javascript é a mesma coisa que Java?
- a) Verdadeiro  
- b) Falso
R: B

### Como se declara uma variável em Javascript?
- a) const carName  
- b) variable carName  
- c) new carName 
R: A

### Que operador é usado para dar valor a uma variável?
- a) =  
- b) -  
- c) *  
- d) x  
R: A

### Diga o que a seguinte equação retorna: `10 > 9`
- a) false  
- b) true
- c) NaN 
R: B 

### Javascript é case-sensitive (que diferencia maiúsculas de minúsculas)?
- a) Sim 
- b) Não  
R: A
### Como se cria uma função em Javascript?
- a) function myFunction()
- b) function:myFunction()  
- c) function = myFunction()  
R: A

### Como se invoca uma função chamada "myFunction"?
- a) call myFunction()  
- b) function MyFunction()  
- c) myFunction()
R: C

### Como se escreve o condicional IF em Javascript?
- a) if(i === 5) 
- b) if i = 5 then  
- c) if i = 5  
- d) if i == 5 then  
R: A

### Como escrever o condicional IF para executar um código se "i" não for igual a 5?
- a) if(i <> 5)  
- b) if (i != 5)
- c) if i =! 5 then  
- d) if i <> 5  
R: B

### Como um WHILE começa?
- a) while i=1 to 10  
- b) while (i <= 10)
- c) while (i <= 10; i++) 
R: B 

### Como um LOOP FOR começa?
- a) for i=1 to 5  
- b) for (i=0; i<=5)  
- c) for (i<=5; i++)  
- d) for (i=0; i<=5; i++)
R: D

### Como se adiciona um comentário em Javascript?
- a) <!--Este é um comentário-->  
- b) //Este é um comentário
- c) "Este é um comentário"
R: B  

### Como adicionar um comentário com mais de uma linha?
- a) /*Este comentário tem mais de uma linha*/ 
- b) <!--Este comentário tem mais de uma linha-->  
- c) "Este comentário tem mais de uma linha"  
R: A

### Qual é a maneira correta de escrever um array?
- a) const colors = ['red', 'green', 'blue']
- b) const colors = 'red', 'green', 'blue'  
- c) const colors = [1: 'red', 2: 'green', 3: 'blue']  
- d) const colors = ['red'], ['green'], ['blue']  
R: A
---

## Exercícios de Programação

### Variáveis

#### Crie uma variável chamada `carName` e atribua o valor `Maverick` a ela:
const carName = "Maverick";

#### Crie uma variável chamada `x` e atribua o valor `50` a ela:
const x = 50;


#### Exiba a soma de 5 + 10 usando duas variáveis `x` e `y`:

const x = 5;
const y = 10;
console.log(x + y);

#### Complete o código criando uma variável `z`, atribuindo `x + y` a ela e exibindo o resultado:
let x = 5;
let y = 10;
let z = x + y;
console.log(z);

#### Declare estas três variáveis em uma única linha:

let nome = "Torresmo", raca = "cachorro", cor = "caramelo"

### Operadores

#### Multiplique 10 por 5 e exiba o resultado:
console.log(10 * 5);


#### Exiba o resto da divisão de 15 por 9:
console.log(15 % 9);

#### Use o operador de atribuição correto para fazer `x` ser igual a `x + y`:
x += y;

#### Use o operador de atribuição correto para fazer `x` ser igual a `x * y`:
x *= y;
x = x*y


### Tipos de Dados

#### Use comentários para descrever o tipo correto de cada variável:
let length = 16; // numero
let lastName = "Johnson"; // string
const x = { firstName: "John", lastName: "Doe" }; // objeto

### Funções

#### Execute a função chamada `myFunction`:
function myFunction() {
  let nome = "Mateus", sobrenome = "Fernandes";
}
myFunction();

#### Complete o código, criando uma função chamada `myFunction`:

function myFunction() {
  console.log("Hello");
}
myFunction();

#### Complete o código para retornar "Hello":

function myFunction() {
  return "Hello";
}
console.log(myFunction());


### Objetos

#### Mostre a informação "John" em um console.log:
const nome = "John"
console.log(nome)

#### Adicione a propriedade `country: Norway` ao objeto `person`:
const person = { nome: "John",};
console.log(person)
person.country = "Norway";
console.log(person)

#### Crie um objeto e exiba uma mensagem:
const time = { nome: "Gremio", descricao: "maior do mundo" }
console.log(`O ${time.nome} é o ${time.descricao}.`)


### Strings

#### Exiba o comprimento de `txt`:
const txt = "Gabriel, Alice, Larissa, Lucas, Bruno Cesar e Lucca";
cont comprimento = txt.length;
console.log(comprimento);


#### Concatene duas strings:
let primeira = "Ca";
let segunda = "brito";
console.log(primeira + segunda);


#### Converta para maiúsculas:

let palavra = "Cabrito"
console.log(palavra.toUpperCase());

#### Substitua "Hello" por "Welcome":
let palavra2 = "Hello";
console.log(palavra2.replace("Hello", "Welcome"));

### Arrays

#### Mostre "Volvo":
const meuCarro = ["Volvo"]
console.log(meuCarro[0])



#### Mude o primeiro item para "Ford":
const meuCarro = ["Volvo"]
meuCarro.splice(0,1,"Ford")
console.log(meuCarro)


#### Mostre o número de itens:
const meuCarro = ["Ford", "Celta"]
console.log(meuCarro.length)


#### Remova o último item:
const listaDeCompras= ["Refri", "Pao", "Queijo"]
listaDeCompras.pop()

#### Adicione "Kiwi":
const listaDeCompras= ["Refri", "Pao", "Queijo"]
listaDeCompras.push("Kiwi");

#### Remova "Orange" e "Apple":
const listaDeCompras= ["Refri", "Pao", "Queijo", "Orange", "Apple"]
listaDeCompras.splice(3,2;)

### Condicionais

#### Mostre "Hello World" se `x` for maior que `y`:
if (x > y) {
  console.log("Hello World");
}

#### Mostre "Hello World" ou "Goodbye":
if (x > y) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}

### Loops

#### Loop `for` de 0 a 9:
for (let i = 0; i < 10; i++) {
  console.log(i);
}

#### Loop `while` com incremento de 2:
let i = 0;
while (i < 10) {
  console.log(i);
  i += 2;
}
