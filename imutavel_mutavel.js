/* 
    Em Javascript existe uma diferença fundamentamental entre valores primitvos(undefined,
    null, booleanos, números e strings)  e objetos(array e funções)
    
    Os valores primitivos são imutáveis, e gera confusão quando falamos de strings, pois ao utilizarmos um método por
    exemplo, não modifica a string(array de caracteres)  e sim gera uma nova

    */

let teste = "Hello";

console.log(teste.toUpperCase());  //Retorna uma nova String temporária HELLO   
console.log(teste);  //Retorna a String original, a gravada.

/*
    Já os objetos são diferentes dos valores primitivos, eles são MUTÁVEIS, ou seja, objetos podem mudar.

*/

let objeto_a = {
    propriedade_x:1
};

objeto_a.propriedade_x=5;       //Modifica a propriedade_x de 1 para 5
objeto_a.propriedade_y = 3;     //Cria a propriedade_y


// lembrando, array também são mutáveis

let array_a = [0,1,2];

array_a[0] = 9;  //Coloca o elemento 9 na posição 0

array_a[3] = 3; //Coloca o elemento 3 na nova posição, a posição 3(quarta posição)


/* Quanto a comparação: Dois objetos não são comparados por valor, mesmo que tenham as mesmas propriedades e valores
E dois arrays não são iguais mesmo que tenham os mesmos elementos na mesma ordem */

let objeto_teste = {
    x:1
};

let objeto_exemplo = {
    x:1
};

console.log(objeto_teste === objeto_exemplo);  //false

let array_teste =[];
let array_exemplo = [];

console.log(array_exemplo === array_teste);  //false

/*

As vezes objetos são chamados de tipos de referência para distingui-los dos tipos primitivos de Javascript,
Usando essa terminologia, os valores de objeto são referências e dizemos que os objetos são comparados por
referência:

dois valores de objeto são iguais se, e somente se, eles se referem ao mesmo objeto básico.



*/

let a = [];
let b = a;

b[0] = 1; // adciona 1 ao array na posição 0 de a, através de b.

console.log(a);  //Podemos verificar que agora o vetor possui 1 na sua posição 0
console.log(a === b);  //True pois a e b se referem ao mesmo objeto

/* 

Como podemos ver no código acima, atribuir um objeto a uma variável, simplesmente atribui a referência, isso não cria uma nova
nova cópia do objeto.

Caso queira fazer uma cópia de um objeto ou array, precisa-se copiar explicitamente as propriedades do objeto ou 
dos elementos do array através de um laço for.

*/

let vetor_a = ['Corinthians','São Paulo','Vasco'];
let vetor_b = [];

for(var i = 0; i<vetor_a.length; i++){
      
    vetor_b[i] = vetor_a[i];
}

console.log(vetor_b);  //  vetor b agora é [ 'Corinthians', 'São Paulo', 'Vasco' ]






