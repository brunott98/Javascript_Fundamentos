let a = 1   
let b = -1
let c = 0
let d = 0


console.log(a/c)  //Em javascript ele retorna casos de estouro númerico como Infinity
console.log(b/c)  //Em javascript ele retorna casos de estouro númerico negativo como -Infinity
console.log(c/d)  //Em javascript isso gera um retorno como NaN not-a-number


let nova_a = Number.Infinity
let nova_b = Number.Infinity

let nova_c = Math.pow(b,1/2)
console.log(nova_a/nova_b)  //infinito dividido por infinito Retorna NaN
console.log(nova_c)   //Retorna NaN quando raiz quadrada de num negativo é solicitado

/*Os valores NaN tem uma peculiaridade, não podem ser comparados como igual a qualquer outro valor incluindo ele mesmo.
isso significa que não pode escrever valor_NaN == NaN
para isso deve-se utilizar valor_NaN != valor_NaN, a expressão só será verdadeira caso valor_NaN seja NaN;
também podemos nos apropriar da função isNaN() passando para ela um argumento NaN ou alguma string, ou objeto
 e então ela retornará true,  o mesmo vale para isInfinite() */


 /* Outra peculiaridade é que em JS NÃO CONSIDERA uma diferença entra zero negativo e zero positivo mesmo no modo restrito de 
 teste de igualdade. */

let zero_positivo = 0
let zero_negativo = -0

console.log(zero_positivo === zero_negativo)

console.log(1/zero_positivo === 1/zero_negativo)//Observe que para ele infinito positivo e infinito negativo são diferentes.



/* Em Javascript a representação de um número será a aproximação dele, isso é
 arredondamentos devido ao uso de números binários em pontos
flutuantes  */


/* A representação de um número float é uma representação binária de frações como 1/2, 1/8 e 1/1024 que é representado com exatidão
entretanto números como 1/10, 1/100 etc, acabam perdendo essa exatidão. */

let x = .3 - .2
let y = .2 - .1

console.log(x===y)  //Devido a questão de arredondamento e precisão, são diferentes
console.log(x==y)   //Devido a questão de arredondamento e precisão, são diferentes

/*Embora sejam bem pouco diferentes, os valores não causam nenhum problema nas operações aritméticas, entretanto comparações sim */







