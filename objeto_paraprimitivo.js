/* Existem dois métodos utilizados para converter um objeto para um primitivo

.toString()   retorna uma representação em string. Para array retorna cada elemento como string e une cada elemento
 em um só sendo separado com virgulas

Uma apliacação interessante é para classe Date, que retorna data e hora legível para humanos.


 ou 
 .valueOf()  retorna o valor primitivo se possível daquele objeto




 */

let vetor = [1,2,3];
let vetor_string = vetor.toString();
console.log(vetor_string);   //Retornou 1,2,3 

let data = new Date(2022,6,08);
let data_visual = data.toString();
console.log(data_visual);       //Fri Jul 08 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)


/*Uma aplicação interssante é usar valueOf para Date, onde retorna o tempo em milissegundos a partir do dia 
1 de janeiro de 1970 até a data escolhida  */


let tempo = new Date(2010,0,1);
let tempo_ateiniciojs = tempo.valueOf();
console.log(tempo_ateiniciojs);


/*
Js para converter para primitivo string primeiro tenta o toString(), caso não possua ele utiliza o valueOf(), se for possivel
ele transforma em uma string

caso contrário, retorna erro.

Para conversão de primitivo numérico, js primeiro tenta fazer valueOf(), se der certo retorna um número 
caso contrário tenta o método to string e retorna um valor primitivo e converte o valor, caso contraário resulta em erro.


Em js o operador + efetua adição númerica e concatenação de strings. Se um de seus operandos é um objeto 
js converte esse objeto para um primitivo especial, em vez da conversão de objeto para número utilizada pelos outros operadores
ariméticos. O operador de igualdade == é semelhante, caso seja solicitado para comparar um objeto e um primitivo
ele converte o objeto usando a conversão de objeto para primitivo.


Seguem exemplos com Date


*/


let agora = new Date();
console.log(typeof(agora));      //Object

console.log(typeof(agora + 1));  //String
console.log((agora + 1));       //Fri Jul 08 2022 22:52:51 GMT-0300 (Horário Padrão de Brasília)1

console.log(typeof(agora - 1));  //Number com 1 milissegundo a menos
console.log((agora - 1),agora.valueOf());  //1657331648893 1657331648894

console.log(agora == agora.toString()); // True converteu o objeto para string e o comparou
console.log(agora === agora.toString()); // False, objeto é diferente de primitivo.

console.log(agora > (agora -1)); //True ambos são tipos iguais, no caso, numeros, pois o operador converteu o now. 
console.log((agora.valueOf()) > (agora -1)); //True pois numéricamente é maior, conferme visto acima.