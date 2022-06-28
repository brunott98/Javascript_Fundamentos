/* 

Objetos em jS são valores compostos: Eles são um conjunto de propriedade ou valores nomeados.
Ao usarmos a notação. fazemos referência ao valor de uma propriedade. Quando o valor de uma propriedade
é uma função , a chamados de método.
Para chamar o método m de um objeto o, escrevemos o.m()

Também vimos que as strings têm propriedades e métodos.

*/

var s = "Hello world!";    // uma string
var word = s.substring(s.indexOf(" ") + 1, s.length - 1);   

/*Usa propriedades da string, onde usamos dois metodos(onde a propriedade regastada . é uma função), 
os metodos substring e indexOf.

Retorna word, identificamos a posição inicial para a substring como sendo a posição do (espaço entre palavras da
string + 1), e definimos como fim o (comprimento da string -1) como a posição final.

Contudo, as strings não são objetos. Então, como tem propriedades? ao solicitar acessar uma propriedade de uma string
js converte o valor da mesma em um objeto. como se fosse newString(). Esse objeto herda métodos da string e é utilizado
para solucionar a referência da propriedade. Uma vez solucionada a propriedade, o objeto recentemente criado, é descartado.

Números e valores booleanos têm métodos pelo mesmo motivo que as strings: Um objeto temporario é criado com a construtora
Number() ou Boolean() e o método é solucionado por meio desse objeto temporário.
Não existem objetos empacotadores (wrapper) para os valores null e undefined, qualquer tentativa de acessar as propriedades
resultara em erro TypeError.

*/
                            
var k = "test";
k.len = 4;  //Configura uma propriedade
var tamanho_k = k.len;  
console.log(tamanho_k)  /*resulta em undefined pois k.len cria um objeto string temporário e configura sua propriedade
como 4, e em seguida descarta esse objeto. Ao criar o tamanho_k cria um novo objeto string a partir do valor 
da string original e ao tentar ler a propriedade .len não consegue pois ela existe, portanto retorna undefined
Esse código demonstra que strings, números e valores booleanos se comportam como objetos quando se tenta ler o valor de
uma propriedade ou método deles. tentar definir um valor de uma propriedade  essa tentativa é ignorada.

Objetos temporários criados ao se acessar uma propriedade de uma string, número, ou valor booleano são conhecidos como
objetos empacotadores (wrapper), e alguns momentos diferenciar strings de objetos strings e etc pode ser necessário.

também podemos criar objeto wrapper explicitamente chamando construtoras String(), Number(), Boolea()

*/

let a = "test"
let A = new String(a)

console.log(a == A)  //True
console.log(a === A)  //False, valores iguais mas tipos diferentes


