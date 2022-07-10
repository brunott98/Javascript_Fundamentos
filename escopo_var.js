/*

Em JS antes de utilizar uma váriavel, você deve declara-lá com var/let + nome da variável.
podendo ou não ser inicializada com valor
ou para constantes, use const.

mas cuidado, existem diferenças no uso de let e var!


var i;
var m = 0;

let a;
let bom_dia = "Bonjour";

let o = 3, j = 40, k = 5;
var p = 10, u = 22, c = 12;



var a = 3;
let b = 4;
const c = "feliz";

var a = 12;  //Podemos declarar novamente com var 
b = 266;     //Não podemos declarar novamente com let


console.log(a,b,c)

 */


/*Quando declaramos com VAR, uma váriavel com mesmo nome, ocorre precedencia da declarada na
 função sobre a variável global */


 var testa_escopo =  "Escopo Global";
 var tobias = "nombre"

 function Testando_Escopo(){

    var testa_escopo = "Escopo Local";
    console.log(tobias)
    return testa_escopo;

 }

 console.log(Testando_Escopo());   //Escopo Local
 console.log(testa_escopo)
/*

Outra coisa interessante é que Var não possui escopo de bloco, ou seja, sua presença vai além do bloco que está
declarada!

Mas possui escopo de função, como vamos no exemplo anterior!

*/

{
    var testa_bloco = "True"
}
console.log(testa_bloco)

/* Alem disso podemos verificar o conceito de içamento pois por ela ser visível por toda a função podemos declarar
uma varíavel em qualquer momento dentro da função, pois é visivel antes mesmo de ser usada.  */


function Testando_Hoisting(){

    console.log(testa_hoisting);  
    /*
    Observe que chamei uma váriavel que só está declarada mais em baixo, então ele visualiza ela como
    var testa_hoisting;  nesse momento, porem ignorando a inicialização "Olá", resultando em undefined.
                                                                                                                 */

    var testa_hoisting = "Olá";

    console.log(testa_hoisting);  //Retorna "Olá"  pois aqui a inicialização já foi realizada.

    return testa_hoisting;

 }

 Testando_Hoisting();


 /*
 
 Quando você declara uma váriavel global em JS, o que se está fazendo é definindo uma propriedade do objeto global, 
 entretando não podem ser configuradas, ou seja não é possível utilizar o delete.
  Porem, ao utilizar uma váriavel sem ser declarada, JS cria automaticamente uma variavel global que pode ser configurada.

 */

var truevar = 1;

fakevar = 2;
this.fakevar = 3;

console.log(fakevar,this.fakevar)

delete truevar;
console.log(truevar);

delete fakevar;
//Não é possivel visualizar pois não existe mais


delete this.fakevar;
//Não é possivel visualizar pois não existe mais

