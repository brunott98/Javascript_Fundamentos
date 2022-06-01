/* Uma string é uma sequência ordenada imutável de valores 16 bits onde cada um representa um caractere Unicode,
é utilizada para representar textos.
O comprimento de uma string é o número de valores de 16 bits que ela contém.
As Strings e seus arrays utilizam a indexação com base em zero. Poranto a primeira posição é o 0.
Uma string vazia possui comprimento 0. Em Javascript não possui um tipo especial para representar um uníco caractere
por tanto basta usar uma string que possua comprimento 1*/

let p = "π"
let e = "𝑒"  

console.log(p.length)   // consiste em um elemento 16 bits
console.log(e.length)  // consiste em dois elementos de 16 bits, \ud835\ e udc52 para representar o e italico 

/*Strings literais são valores não atribuidos a variáveis */

""          //String vazia
'Bom dia' 
"3.14"
'nome = "bruno"'
console.log("ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn")
console.log("Essa frase\ntem duas linhas")

/*Em ECMASCRIPT 3 as strings literais devem ser escritas em uma única linha, já no ECMASCRIPT 5 podem ser separadas
em outras linhas*/
console.log("Duas\nlinhas")

console.log("One\
Punch\
Man")   //Resultado: OnePunchMan

/*Sequências de escape em strings literais

O caractere de barra invertida \ tem um proposito nas strings em JS, combinado que vem com o caractere que vem a seguir
ele representa um caractere que não pode ser representado de outra forma, como por exemplo \n significa nova linha.
*/
console.log('Bonjour \'mademoiselle\'')  //Aplicação interessante de \'




