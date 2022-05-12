/* Números em Javascript não são divididos em inteiros e pontos flutuantes, portanto todos números em js são considerados
 flutuantes, de 64 bits do padrão IEEE 754(Também conhecido em Java por tipo double)
 podendo representar números grandes elevados 308 potência ou muito pequenos elevado -324 potência
 
    Quando um número aparece de uma vez no programa, dizemos que ele é literal númerico.

   Cuidado  -1 por exemplo é constituido de um literal 1 e um operador de negação unário  -


    LITERAIS INTEIROS:
    Para escrever um inteiro de base 10, basta digitar a sequência de digitos.
    ex: 1, 200, 0.
    Também é possivel escrevelos em outras bases, como a hexadecimal, onde começam sempre com 0x 

    por exemplo: 0xff que é 255 em decimal por exemplo


    LITERAIS EM PONTO FLUTUANTE
    Utilizam-se a notação tradicional dos números reais porem, podem varias.

    Ex:  3.14
         12.11
         .333333
         6.02e23   --> signifca   6.02  * 10^23
         1.4738223e-32  --> significa 1.4738223 * 10^-32

    Utilizando os operadores aritmético em JS
 */

   console.log(Math.pow(2,3))   //Realiza a operação 2 elevado a 3  = 8

   console.log(Math.round(1.6)) //Arredonda para o inteiro mais proximo = 2
   console.log(Math.round(1.4)) //Arredonda para o inteiro mais proximo = 1

   console.log(Math.ceil(1.3)) //Arredonda para cima o inteiro mais proximo = 2
   console.log(Math.floor(4.9)) //Arredonda para baixo o inteiro mais proximo = 4

   console.log(Math.abs(-90)) //Traz o valor absoluto de um número = 90

   console.log(Math.max(10,20,40,30)) //Retorna o maior número no argumento = 40
   console.log(Math.min(50,10,20,15)) //Retorna o menor número no argumento = 10

   console.log(Math.random())         //Retorna um valor aleatório entre 0 e 1 como default
   
   console.log(Math.PI) //Retorna o valor de π
   console.log(Math.E) //Retorna o valor de Euler

   console.log(Math.cos(Math.PI)) //Retorna o valor do cosseno de PI ou seja, o cosseno de 180 graus = -1

   console.log(Math.sqrt(16)) //Retorna o valor da raiz quadrada de 16 = 4

   console.log(Math.pow(8,1/3)) //Retorna o valor da raiz cubica de 8 = 2

   console.log(Math.log(10)) // Retorna o logaritmo natural de 10

   console.log(Math.log(10)) // Retorna o logaritmo natural de 10

   console.log(Math.log(100)/Math.LN10) // Retorna o logaritmo de 100 na base 10

   console.log(Math.log(512)/Math.LN2) // Retorna o logaritmo de 512 na base 2

   console.log(Math.exp(3)) // Eleva ao cubo o valor de Euler ---> o Math.E


    
        

    

