/* Objeto global é um objeto normal de js que tem um objetivo importante: as propriedades desse são os símbolos definidos
 globalmente que estão disponíveis para um programa javascript.

 Quando o interpretador js começa ou quando um navegador web carrega uma nova pagina, ele cria um novo objeto global,
 e dá a ele um conjunto inicial de propriedades que define:
 
 propriedades globais: como undefined, Infinity, e NaN
 funções globais: como isNaN(), parseInt() e  eval()
 funções construtoras: como Date(), RegExp(), String() e Array()
 objetos globais: como Math e JSON.

As propriedades inicias do objeto global não são palavras reservadas, mas merecem ser tratadas como se fossem
*/

let variavel_global = this; //Define uma varíavel global para se referir ao objeto global

/* Em js do lado do cliente, o objeto Window serve como objeto global para todo o código javascript contido na 
janela do navegador que ela representa. Esse objeto global Window tem uma propriedade de autoferência window
que pode ser usada no lugar de this para referir ao objeto global. O objeto Window define as propriedades
globais básicas, mas também define muitos outros globais que são específicos para navegadores web e para Javascript
do lado do cliente.

Se seu código declara uma variável global, essa variável é uma propriedade do objeto global.

*/
