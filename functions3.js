/*
Como passar um parametro default em uma função JS.

*/

function param_default(a,b,c){

    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;

}

console.log(param_default(1,2,3));   //6
console.log(param_default(2,2));    //5 
console.log(param_default(0,0,0));   // problema, 0 ele considera como false e admita o valor padrão 1 portanto => 3



/*

Portanto existe uma solução mais refinada, usando operador ternário


*/

console.log('\n');

function parametros_default(x,y,z){
    x = x !== undefined ? x : 1
    y = 1 in arguments ? y : 1   //No caso estamos escolhendo a posição [1], pois é a posição do y
    z = isNaN(z)? 1 : z         //Recomenda-se o uso desse, pois atende tanto undefined quanto string!

    return x + y + z;
}

console.log(parametros_default(2,2));       //5   
console.log(parametros_default(2,2,2));    //6
console.log(parametros_default(4,4,"b")); // 9
console.log(parametros_default());       //3

console.log('\n');


/*
Forma moderna de default!

ES 2015

*/

function soma(a=1,b=1,c=1){
    return a + b + c;
}

console.log(soma()); //3
console.log(soma("Br","un","o"));  //Concatenou =>  Bruno note que string ele não usa o default
console.log(soma(1,2,3));   //6
console.log(soma(1,1));  //3

/*
Portanto NaN é a mais segura

*/
