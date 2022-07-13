/*
 Uma expressão é uma frase de código JavaScript que um interpratdor JS pode avaliar para produzir um valor.

 Uma constante literalmente incorporada em seu programa é um tipo de expressão muito simples.
 Uma nome de variável também é uma expressão simples, avaliada com o valor atribuido a essa variável.
 Expressões complexas são formadas a partir de expressões mais simples.]
 
 Uma expressão de acesso a array, por exemplo, consiste em uma expressão avaliada como um array, seguida
 de um colchete de abertura, uma expressão avalida como um inteiro e um colchete de fechamento.
 Essa nova expressão é avaliada com o valor armazenado no indice especificado do array especificado.
 Da mesma forma, uma expressão de chamada de função consiste em uma expressão avaliada como um objeto de função
 e zero ou mais expressões adcionais, utilizadas como argumentos da função.


 Utilizamos operadores para construir expressões complexas a partir das expressões simples, o operador combina o valor
 dos seus operandos.

 TIPOS DE EXPRESSÕES

 1) Expressões primárias:
 São autonomas e simples, não incluem outras expressões,  são os valores constantes ou literais, palavras-chave da linguagem e referências
 a variáveis.


 */

 1.23           //Um número literal
 "Hello"       //Uma string literal

true        // valor boooleano true
false      // valor booleano false
null     // avaliado como null
this    //Avaliado como objeto "atual"  (quando passada como um método)



/*
Por fim o terceiro tipo de expressão simples, referência de variável simples:

i           //é avaliada como valor da variável i
sum        // é avaliada como o valor da variável sun
undefined  //No caso é uma variável global e não uma palavra chave como null




2) Inicializadores de objeto e array

Os inicializadores de objeto e array são expressões cujo  valor é um objeto ou array recem-criado.

As expressões inicializadoras as vezes são chamadas de "objetos literais" e "arrays literais"


contudo ao contrário dos verdadeiros literais, eles não são expressões primárias, pois incluem várias subexpressões
que especificam valores de propriedade e elemento.

Começando por array

Um inicializador de array é uma lista de expressões separadas com vírgulas e contidas em colchetes. 

O valor de um inicializador de array recem-criado.
O elementos desse novo array são inicializados com os valores das expressões separadas com virgulas

[] //Array vazio

[1+2,3+4]  //Array de dois elementos, 3 e 7.

Expressão de function
a expressão de definiçção de uma função é uma função literal da mesma forma que um inicializador de objeto é um objeto literal.
utilizamos  a palavra chave function,  let function_name = function(){}


Expressão de acesso à propriedade 
Uma expressão de de acesso à propriedade é avaliada com o valor de uma propriedade de objeto ou de um elemento de array.

expressão.nome_propriedade ou expressão[expressão]

-------------------------------------------------------------------------------
OPERADORES
Operadores são utilizados  em JavaScript para expressões aritméticas, expressões de comparação, expressões lógicas, expressões de atri
buição e muito mais.
a maioria dos operadores regulares são representados por caracteres de pontuação, mas podem ser palavras-chave, por exemplo, delete e instanceof.

A tabela abaixo está organizada em precedência de operadores(da maior precedencia para a menor predencia).

OPERADOR                        OPERAÇÃO                    ASSOCIATIVIDADE DE OPERADOR         NUMERO DE OPERANDOS         TIPOS
++                        PRÉ- OU PÓS-INCREMENTO            DIREITA PARA A ESQUERDA                     1                    lval->num
--                        PRÉ- OU PÓS-DECREMENTO            DIREITA PARA A ESQUERDA                     1                    lval->num
-                         Nega o número                     DIREITA PARA A ESQUERDA                     1                    num->num
+                         Converte para número              DIREITA PARA A ESQUERDA                     1                    num->num
~                         Invere bits                       DIREITA PARA A ESQUERDA                     1                    int->int
!                         Inverte o valor booleano          DIREITA PARA A ESQUERDA                     1                    bool->bool

-----------------------------------------------------------------------------------------------------------------------------(pg 62)

Operadores
a Maioria dos operadores JavaScript coomo operador de multiplicação *, é um operador binário, pois combinam duas expressões em uma mais 
complexas, também existem operadores uniários, que convertem uma expressão em uma mais complexa.
por exemplo o operador   -  , quando usado na expressão -x,  é um operador unário que efetua a operação de negação do operando de X.
e por fim, o operador ternario , o operador condicional ?: que combina três expressões em uma.

Lvalues
lvalue: expressão que pode aparecer de forma válida do lado esquerdo de uma expressão de atribuição

em js, variáveis, propriedades de objetos e elementos de arrays, são lvalues.

cuidado com as precendências
w = x + y * z

nesse caso a multiplicação será feita primeiro e depois a soma, para corrigir isso use parenteses
w = (x + y) * z

note que JS sempre faz a avaliação da esquerda para a direita.

Operador +
Binário, soma dois operandos númericos ou os concatena operando strings
1 + 2 = 3
"bom" +" "+ "dia"  = "bom dia"
"1" + "2" = "12"
console.log("1"+2)  Converte o segundo em string e concatena = "12"
console.log(1+"2")  Converte o primeiro em string e concatena = "12"

cuidado com o caso onde temos "3"*5 ou "3"*"5"  = pois converte em número e multiplica.

se um de seus valores é um objeto, ele o converte em primitivo
se o outro operando é string, ele converte o primitivo em string e os concatena, caso contrário são convertidos em números e somados.


1 + {}  = "1[object Object]"
true + true =  2
2 + null = 2  (converte null para 0)
2 + undefined  = NaN

 1 + 2 + " bound" = "3 bound"
 1 + (2+" bound") = "12 bound"

 




Operadores aritméticos unários

mais unário
+ expressão
transforma a expressão em número

-------------------------------------

menos unário
- expressão
transforma a expressão em número e muda o sinal

---------------------------------------

incremento ++

pode ser pós ou pré

pré incremento 
++expressão

ele incrementa o operando e é avaliado com o valor incrementado desse operando 

por exemplo:     var i = 1, j= ++i;   i será incrementado e o j é o valor incrementado  portannto i e j são iguais a 2



pós incremento
expressão++

var  i = 1,  j = i++;   ele incrementa seu operando mas é avaliado como um valor não incrementado portanto i = 2 e j = 1
    

*/


let a = 5;       // a = a + 1
let b = ++a;    //b = a + 1

let c = 5;      // c = c + 1
let d = c++;   //d = c

console.log(a,b)
console.log(c,d)

/*
Operadores destructuring
Serve para desestruturar um objeto ou array, portanto para extrair um atributo ou elemento


*/

const character = {
    Name:"Diluc",
    Vision: "Pyro",
    Elemental_Abilities:{
        Elemental_Skill:"Searing Onslaught",
        Elemental_Burst:"Dawn"
    }

}
const {Name,Vision } = character  //Extraia Name e Vision do objeto character

//agora vc pode acessar esses dados como variáveis!
console.log(Name,Vision) //Diluc Pyro

//Também podemos atribuir variáveis para representar os atributos extraidos

const {Name:n, Vision:v} = character

console.log(n,v)      //Diluc Pyro
//caso tente acessar algo não definido por padrão js retorna undefined

const {Elemental_Abilities:{Elemental_Skill:ES ,Elemental_Burst:EB}} = character
//Cuidado ele extrai de dentro de Elementa_Abilities, não de character

console.log(ES,EB)


// Usando destructuring em array 

const number_hits = [1,1,3]
const [first_attack,seccond_attack, third_attack] = number_hits;

console.log(third_attack)  //Extraido = 3


//Podemos atribuir e extrair simultaneamente
const[Talent1,Talent2,Talent3] = [1,2,3]
console.log(Talent1,Talent2,Talent3)

