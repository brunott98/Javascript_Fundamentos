/*Valores booleanos

um valor boleano representa verdadeiro ou falso, resultando um valor ou outro.
true e false.

comparações são 
x == 7

se for verdade resulta true, se não false

Também podemos combinar com condições

if (a==12)
    b = b + 5
else
    a = a + 1    
 
Em Javascript qualquer valor pode ser convertido em um valor booleano, os valores a seguir funcionam como false:

undefined
null
o
-o
NaN
"" // string vazia

Todos os outros valores incluindo todos os objetos e arrays são convertidos e funcionam como true.

suponha que uma váriavel CIDADES contem um objeto ou valor null.  você pode testar explciitamente pra ver se CIDADES
é não nulo, com uma instrução !==

*/

let CIDADES = null
console.log(CIDADES!==null)  //False, é igual null


let PLANETAS = 15
console.log(PLANETAS!==null)  //True, é diferente de null


let DIMENSÃO = null   

if ((CIDADES == null && PLANETAS == 20) || (DIMENSÃO !==null)){
    console.log(true)  
    
}

else{
    console.log(false)   //retorna false pois planetas não foi atendido como 20 ou pelo menos
                        // dimensão ser diferente de null
}

let teorema = NaN
let acesso = true
let update = false
console.log(!!teorema)  //Uma forma de converter para booleano e verificar se é verdadeiro ou falso
console.log(!!acesso) 
console.log(!!update) 
