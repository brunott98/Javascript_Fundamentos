/*

null = valor nulo

*/

console.log(typeof(null))  /*retorna tipo objeto, portanto null pode ser considerado um valor de objeto especial
                            "nenhum objeto, pode ser utiizado tanto para objetos quanto para numeros e strings"*/


/*
undefined = ausência de valor 

é o valor de variáveis que não foram inicializadas e o valor obtido quando se consulta o valor de uma 
propriedade de objeto ou elemento de array que não existe.

Também ocorre por funções que não possuem valor de retorno e os parametros de função quando não são fornecidos
 
undefined é uma variavel global predefinida(não é uma palavra-chave da linguagem como null) em ES3 podia gravar valores
na mesma, mas em ES5 isso foi alterado apenas para apenas leitura dessa variável.

*/

console.log(typeof(undefined))  // retorna undefined, indicando que esse valor é o unico membro de um tipo especial

/*

cuidados:  null e undefined servem para ausencia de valor portanto compara-los como iguais é true

null==undefined   R: true

entretanto ao usar a operação de comparação de igualdade restrita
null === undefined    R: false

não possuem propriedades e não podem ser utilizados metodos dos mesmos como . ou [] , resulta em typeError.

recomenda-se o uso de undefined para ausencia de valor no sistema, como inesperada ou erro.
enquanto null para representar um valor nulo esperado, na maioria dos casos usa-se null.

*/
