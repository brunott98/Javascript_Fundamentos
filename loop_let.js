for(let i = 0; i<10; i++){
    console.log(i);
}

//O laço vai até 10, no momento em que chega no 10 ele é quebrado.


/* console.log(`i=${i}`) --> i is not defined, ESCOPO DE BLOCO TBM SERVE PARA instruções, ou seja, let i não está visivel
para todo o código fonte apenas dentro do for
*/

console.log("----------------------------");

const vetor =[]

for(let j = 0; j<10; j++){
    vetor.push(function(){
        console.log(j);
    })
}

vetor[2]();   //Escopo de bloco retorna o valor no momento dentro do bloco --> 2
vetor[8]();  // Escopo de bloco retorna o valor no momento dentro do bloco --> 8