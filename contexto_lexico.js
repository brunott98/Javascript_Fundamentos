/*
Dentro de um modulo do node...

*/

const valor = 'Global';

function minha_funcao(){
    const valor = "Global"
    console.log(valor)
}

function exec(){
    const valor = 'Local';
    minha_funcao()
}

exec() //Global, pois ao chamar minha_funcao ele procura a sua definição, e na definição o valor é o global.

//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função.


console.log("\n")

const x = "Global";

function fora(){
    const x = "Local";
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao =  fora()
console.log(minhaFuncao())


/*
Portanto para encontrar uma variável, Javascript  começa examinando o primeiro objeto do encadeamento(mais interno) 
e vai avançando para o mais externo.

em exemplos com funções aninhanadas ele procure na primeira função que conter esse valor, caso não tenha, procura no objeto global.
 

LEBRE-SE: ESSA VARREDURA É FEITA NA DECLARAÇÃO DA FUNÇÃO E NÃO NA CHAMADA DA MESMA.

 */