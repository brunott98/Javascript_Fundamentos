/*Os tipos de Javascript são divididos em tipos primitivos e tipos de objeto.

 1 - São considerados tipos primitivos:  números, strings, booleanos, null e undefined.

 2 - São considerados objetos aqueles que não são primitivos. Objetos são definidos por um conjunto de propriedades onde
cada propriedade possui um nome e valor(do tipo primitivo ou de objeto)

 2.1 - Objetos especiais: objeto Global, arrays e função(é um objeto que possui um código executável e além disso são valores reais
    que podem ser tratadas como objetos normais).

 2.1.1 Funções construtoras: Funções que utilizam do operador new inicializam um objeto, cada construtora define uma classe de objetos ou seja 
 um conjunto de objetos inicializados por essa construtora, as classes podem ser consideradas como subtipos do tipo objeto.

 2.1.2 Algumas classes além de Function e Array importantes: 
    Date: Define objetos que representam datas;
    RegExp: Define objetos que representam expressões regulares, que serve para comparar padrões;
    Error: Define objetos que represetam erros de sintaxe.



 2.2 - Objetos normais: Conjunto não ordenado de valores nomeados.



  O Interpretador Javascript realiza a coleta de lixo automática para gerenciamento de memória, isso signfica que um programa pode 
  criar objetos conforme for necessário de forma que quando um objeto não pode ser mais acessado ou não consiga ser mais referido, o interpretador
  automaticamente recupera esse espaço de memória utilizada anteriormente para uso. 
  
  Javascript é uma linguagem orientada a objetos. Isso significa que, em vez de ter funções definidas globalmente para operar valores de vários
  tipos, os próprios tipos definem métodos para trabalhar com valores.
    Por exemplo:  Para classificar os elementos de um array, a por exemplo, não passamos  vetor_a para uma função sort(). Em vez disso, 
    chamamos o método sort de vetor_a
    vetor_a.sort()   que é a versão orientada a objeto de  sort(vetor_a).

    basicamente somente objetos possuem métodos, mas os tipos primitivos se comportam como se tivessem métodos, null e undefined não
    possuem métodos para serem chamados.


 Alem dos tipos de valores, podemos dividir os tipos com metódo ou sem método, e tipos mutáveis(objetos e arrays) ou imutáveis(números,
    booleanos, null, undefined e strings mesmo sendo consideradas arrays de caracteres onde é possível acessar a posição mas não alterá-la)


    
    Tipagem: Váriaveis em Javascript não são tipadas, permitindo uma livre atribuição de valores, por exemplo, uma string pode ser considerada número, e etc
    Váriaveis: São regradas pelo contexto léxico, ou seja, váriaveis de funções existem apenas nas funções, e fora da função são globais.
    
 */

