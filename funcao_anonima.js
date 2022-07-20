const soma = function(a,b){
    return a + b;
}

const imprimir_resultado = function(x,y, operacao = soma){
    console.log(operacao(x,y))
}

imprimir_resultado(1,5)

imprimir_resultado(5,1, function (x,y){
    return x-y
})