/*
Aplicando destructuring em uma função

 passando destructuring dentro dos parametros para que a função receba um objeto
 e dentro da função não precise acessar o objeto.min  e objeto.max, ele já tira os dois atributos e já entregue eles como
 parametros

*/

/*

criando uma função que sempre que executada retornará um numero aleatório entre os valores minimo (inclusivo) e maximo (exclusivo).
Math.random() retorna um numero maior ou igual a 0 e menor que 1 (Aleatório).

Para que a função respeite o minimo e o máximo passado então utiliza-se a formula abaixo

Math.floor(valor)é utilizado para arendodar o numero para baixo uma vez que ele quer o numero inteiro.
obtem um numero aleatório garantindo que ele não passe do valor definido em max e depois soma + minpara garantir que
 esse número esteja dentro do mínimo informado.

*/



function rand({ min = 0, max=1000 }){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({}));  //Usa o default


const objeto_sorteio = {min:45,max:50};    
const objeto_sorteio_diferente = {min:1}  //max = default 1000

console.log(rand(objeto_sorteio));
console.log(rand(objeto_sorteio_diferente));

console.log("\n")


function aleatorizador([min=0, max = 1000]){
    if(min>max) [min,max] = [max, min]    //[destructuring]  = [array com atributos extraidos a cima][Aplicação interessante de destructuring é trocar variaveis
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

console.log(aleatorizador([50,40]))
console.log(aleatorizador([992]))


/*Desafio 

let num1 = 1
let num2 = 2
console.log(++num1 === num2--)  //True or False?


se você prestou atenção nas aulas sabe que existe um conceito chamado precedencia de operadores
ou seja, retornara true!
pois primeiro ele da precedencia ao ++num1 = 2 e como faz leitura da esquerda para a direita, compara 
2 === 2 = true!
e depois  da comparação ele decrementa!

*/



/* Operador ternário é composto de expressão comparativa entre dois valores, gerando dois resultados.
no caso abaixo atribuimos uma função arrow a constante profit_result. */

const profit_result = profit => profit>50? "Good job" : "Try again!"

console.log(profit_result(60))
console.log(profit_result(45))
