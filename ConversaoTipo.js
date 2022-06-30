/*

Em Javascript, existe uma grande liberdade para converter os tipos de valores, alguns tipos de valores podem ser 
convertidos em true e outros em false e etc.

Alguns exemplos:

*/

let demonstracao = 10 + " objetos"  //Resulta em "10 objetos"   number + string = string

let demonstracao2 = "7" * "3"      // Resulta em 21     string * string = number

let demonstracao3 = 1 - "x"  // NaN pois x não pode virar number

let demonstracao4 = demonstracao3 + " objetos"   //Resulta em "NaN objetos" pois o NaN anterior se tornou string


/*
                            TABELA DE CONVERSÕES
VALOR: undefined        EM STRING:"undefined"       NÚMERO: NaN         BOOLEAN: false      OBJETO: TypeError
VALOR: null             EM STRING:"null"            NÚMERO: 0           BOOLEAN: false      OBJETO: TypeError

------------------------------------------------------------------------------------------------------------------------

VALOR: true             EM STRING:"true"            NÚMERO: 1                               OBJETO: new Boolean(true)
VALOR: false            EM STRING:"false"           NÚMERO: 0                               OBJETO: new Boolean(false)

------------------------------------------------------------------------------------------------------------------------

VALOR: "" (string vazia)                            NÚMERO: 0           BOOLEAN: false      OBJETO: new String("")
VALOR: "1.2" (string não vazia, númerica)           NÚMERO: 1.2         BOOLEAN: true       OBJETO: new String("1.6")
VALOR: "Knight" (string não vazia, não númerica)    NÚMERO: NaN         BOOLEAN: true       OBJETO: new String("Knight")

------------------------------------------------------------------------------------------------------------------------

VALOR: 0                EM STRING:"0"                                   BOOLEAN: false      OBJETO: new Number(0)
VALOR: -0               EM STRING:"0"                                   BOOLEAN: false      OBJETO: new Number(-0)
VALOR: NaN              EM STRING:"NaN"                                 BOOLEAN: false      OBJETO: new Number(NaN)
VALOR: Infinity         EM STRING:"Infinity"                            BOOLEAN: true       OBJETO: new Number(Infinity)
VALOR: -Infinity        EM STRING:"-Infinity"                           BOOLEAN: true       OBJETO: new Number(-Infinity)
VALOR: 1                EM STRING:"1"                                   BOOLEAN: true       OBJETO: new Number(1)

------------------------------------------------------------------------------------------------------------------------

VALOR: {}qualquer       EM STRING: a seguir        NÚMERO: a seguir     BOOLEAN: true      
objeto

VALOR: [] (array nulo)  EM STRING: ""              NÚMERO: 0            BOOLEAN: true      
objeto

VALOR: [9]qualquer      EM STRING: "9"             NÚMERO: 9            BOOLEAN: true      
objeto

VALOR: ['a']            EM STRING:.join()          NÚMERO: NaN          BOOLEAN: true      
objeto

VALOR: function(){}     EM STRING: a seguir        NÚMERO: NaN          BOOLEAN: true      
objeto

------------------------------------------------------------------------------------------------------------------------

Conversões de igualdade

null == undefined
"0" == 0                //String é convertida em número para realizar a comparação
 0  == false
"0" == false

Conversões explícitas 

Number("3");         // 3
string(false);  //  "false" ou use false.toString()
Boolean([]);  //Verdadeiro
Object(3);  //novo Number(3)


*/


/*
let a = Object(null);  // gerou {} , gerou um objeto vazio, pois essa função abre uma excessão para null e undefined

let y = x + ""  //O mesmo que String(x)

let k = +x   //O mesmo que number(x)

let booleando = !!x  //O mesmo que Boolean(x)

*/

/*  Também é possivel mudar bases númericas

*/

let n = 3;
let m = 8;

binary_string = n.toString(2);  //Resulta em 11 que é 3 em binário
console.log(binary_string);

octal_string = m.toString(8);   //Resulta em 10 que é  8 na base octal
console.log(octal_string);


/* Precisão numérica

Também podemos trabalhar com a precisão númerica através através dos metodos da classe number,  toFixed()
para escolher o numero de casas decimais, mas isso o converte em uma string.


ou toExponential() para notação exponêncial convertendo o mesmo para string.
*/

let mil = 1100;
let numero_quebrado = 7.24;
let precisao = 4544;

console.log(numero_quebrado.toFixed(0));  // Resulta em "7"
console.log(numero_quebrado.toFixed(1));  // Resulta em "7.2" (arredonda para cima caso seja maior ou igual a 5)
console.log(numero_quebrado.toFixed(2));  // "7.24"

console.log(mil.toExponential(1));       //1.1e+3 converte em decimal com precisão de uma casa decimal de base 10
console.log(precisao.toPrecision(2));    //4.5e+3 converte em decimal com precisão de uma casa decimal de base 10

 /*
 
 Também podemos resgatar um valor float ou inteiro de uma string.
 utilizando a função parseInt() ou parseFloat()
 
 */


 let lucro = "1200.50 reais";

 lucro_int = parseInt(lucro);
 lucro_float = parseFloat(lucro);


 console.log(lucro_int);
 console.log(lucro_float);

 console.log(parseFloat("#@$%"));  // NaN, simbolos não podem ser convertidos
 console.log(parseInt("0xff"));   //255   pois se inicia com 0X ou 0x ele interpreta como hexadecimal.
 console.log(parseInt("-0xff")); //-255
 console.log(parseInt(".1"));   //Decimal não tem parte inteira  portanto NaN
 console.log(parseInt("1.1"));   //Retorna apenas a parte inteira,  1


 /*
 
Parse Int também aceita um argumento extra para especificar a base númerica, podendo usar bases de 2 até 36

 
 */

console.log(parseInt("11",2));  //Converte 11(3) em binário para base númerica 10: portanto 3
console.log(parseInt("ff",16));  //Converte ff(255) em hexadecimal para base númerica 10: portanto 255