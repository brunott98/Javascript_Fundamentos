/* 
Em Js é possivel chamar uma função antes mesmo de defini-la.
A declaração de uma função na verdade declara uma variável e atribui a ela um objeto função.
Nome da função é opcional para funções definidas como expressões

*/
let area_quadradro = function(x){
    return x*x;
}

let area_quadradro2 = function calcula_area(x){
    return x*x;
}







f1()

function f1(){

    let a = 5;
    a++;
    return console.log(a)
    
}

console.log("\n")


/*
Chamando funções:

como funções
como métodos
como construtoras
indiretamente, por meio de seus métodos call e apply


Uma expressão de invocação consiste em uma expressão de função que é avaliada como um objeto função seguida por
parêntese de abertura, uma lista de zero ou mais expressões de argumento separada com vírgulas e com parenteses de fechamento. 



*/