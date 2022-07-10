/*

Diferente de var, let possui escopo de bloco.


*/



{
    let dia_atual = new Date()
    console.log(dia_atual.toDateString())
}
    //console.log(dia_atual)  ReferenceError: dia_atual is not defined  pois dia_atual só existe dentro do bloco



/* Escopo global e de bloco 

*/

let numero = 2;
let testando_numero = 12;


{
    let numero = 5;
    console.log(numero,testando_numero)
}

console.log(numero)




