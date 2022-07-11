for(var i = 0; i<10; i++){
    console.log(i);
}
//O laço vai até 10, no momento em que chega no 10 ele é quebrado.

//Como for não é função e sim instrução, o var i, fica visivel para todo o código fonte!

console.log(`i=${i}`);


console.log("----------------------------");


const vetor =[]

for(var j = 0; j<10; j++){
    vetor.push(function(){
        console.log(j);
    })
}

vetor[2]();   // 10 Resulta no ultimo valor pois var não possui escopo de bloco, tento seu valor visivel
vetor[8]();  // 10 Resulta no ultimo valor pois var não possui escopo de bloco, tento seu valor visivel
