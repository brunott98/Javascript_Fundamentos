const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numeros_pares = 0;
for(let i in numbers){

    if(numbers[i] %2 == 0){

        numeros_pares = numeros_pares + 1;
    
    }

}

console.log(`Foram encontrados: ${numeros_pares} numeros pares`);  //Foram encontrados: 5 numeros pares

console.log("\n")

for(let i in numbers){

    if(i == 5){
        
        break;  
                    /*break faz sair de instruções como for, while e switch!, note que ele não admitiu 
                    que o laço for fosse executado para i igual a 5.*/
    }

    console.log(`Posição ${i}: ${numbers[i]} `);  

}

/*
Posição 0: 1 
Posição 1: 2 
Posição 2: 3 
Posição 3: 4 
Posição 4: 5  */





console.log("\n")

for(let j in numbers){

    
    if(j == 5){
        
        continue;
                    /*Faz a mesma coisa que o break, porem ele roda novamente o laço for a partir de onde foi interrompido
                    portanto ele não deixa j ser igual a 5, e continua o laço chega até o fim */
                    
    }

    console.log(`Posição ${j}: ${numbers[j]} `);  //Coloque o console aqui, pois se não ele mostrará todos os valores

}


/*

Posição 0: 1 
Posição 1: 2 
Posição 2: 3 
Posição 3: 4 
Posição 4: 5      //Note que a posição 5 foi desconsiderada
Posição 6: 7 
Posição 7: 8 
Posição 8: 9 
Posição 9: 10 


*/


/*Para criar um break externo é necessário criar um rótulo */

rotulo_externo: for(let x in numbers){

    for(z in numbers){

        if(x == 2 && z == 2)break rotulo_externo
        console.log(`Par = ${x} ${z}`)

    }
}

/*Procure evitar rotulo com  break e use funções para ter um código mais organizado.

Par = 0 0
Par = 0 1
Par = 0 2
Par = 0 3
Par = 0 4
Par = 0 5
Par = 0 6
Par = 0 7
Par = 0 8
Par = 0 9
Par = 1 0
Par = 1 1
Par = 1 2
Par = 1 3
Par = 1 4
Par = 1 5
Par = 1 6
Par = 1 7
Par = 1 8
Par = 1 9
Par = 2 0
Par = 2 1

*/