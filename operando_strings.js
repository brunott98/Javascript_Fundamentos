/*Um dos recursos incorporados a Javascript é a capacidade de concatenar strings. Se o operador + é utilizado com números, ele os soma
mas se for utilizado com strings ele as une, anexando a primeira com a segunda. Por exemplo:   */

console.log(msg = "Bonjour" + " mademoiselle")  // Bonjour mademoiselle

/* Pode-se determianr o comprimento de uma string - o número de valores de 16 bits que ela contém - usando a propriedade lenght. */

let frase = "Bom dia senhorita"

console.log(frase.length)  // 17 = quantidade de caracteres

console.log(frase.charAt(0))  //Na posição zero temos a letra B

console.log(frase.charAt(frase.length - 1 ))  //Assim conseguimos pedir o último caractere

console.log(frase.substring(0,3)) //Escolhe o 1º, 2º, 3º caractere -> resultado: Bom

console.log(frase.slice(0,3))   //Corta um pedaço da string -> resultado: Bom

console.log(frase.slice(-9))   //Negativo captura os elementos de trás pra frente  portanto os ultimos 9 caracteres -> resultado: senhorita

console.log(frase.indexOf("s"))  //Informa a posição da letra s -> resultado: oitava posição

console.log(frase.lastIndexOf("a"))  //Informa a posição da ultima letra a -> resultado: 16

console.log(frase.indexOf("a",8)) //Informa a posição do primeiro a após a posição 8 

console.log(frase.split(" "))  //Divide em 3 substrings onde possuem espaço  ->  [ 'Bom', 'dia', 'senhorita' ]

console.log(frase.replace("senhorita","mademoiselle"))  // Bom dia mademoiselle

console.log(frase.toUpperCase())   // BOM DIA SENHORITA

/*Vale ressaltar que Strings são imutáveis em Javascript, portantos metodos replace e touppercase não modificam a string, eles retornam novas
strings.

Também podemos tratar strings como arrays comente para leitura e é possível acessar caracteres individuais(valores de 16 bits) de uma string
usando colchetes em lugar do método charAt() */

let palavra = "SHAZAM"
console.log(palavra[0])  //Mostra o caracter da posição 0:  "S"

console.log(palavra[palavra.length-1])  //Mesma tecnica para mostrar o ultimo caracter da palavra(ultima posição): "M"