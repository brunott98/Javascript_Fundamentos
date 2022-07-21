console.log(soma(4,4))

//Function declaration - possui hoisting
function soma(x,y){
    return x + y;
}

//Function Expression  função anonima atribuida a uma variavel ou constante
const sub = function(x,y){
    return x- y;
}

const mult = function mult(x,y){  //Named function expression
    return x + y;
}