function soma(){    //Função sem parametros definidos
    let somador  = 0;
    for(i in arguments){
        somador += arguments[i]; //Seleciona o parametro da função soma, e nela cria  array onde os indice i são os números que serãos somados
    }                            //E percorre i e adciona a somador os valores de i => somador = somador + arguments[i]

    return somador;

} 

console.log(soma());
console.log(soma(1));
console.log(soma(1,2,3,4,5,6))



