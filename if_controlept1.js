function Reward({nivel}){
    if(nivel <= 5){
        console.log("Programador novato, não receberá nível bonus.");
    }
    else{
        console.log(`O programador ${nome} é intermediário, atualmente nivel:${nivel}, portanto recebe um nível bonus.`);
        nivel = nivel + 1;
        console.log(`Agora o programador:${nome} é nível:${nivel}`);
    }
}



const programador = {
    nome:"Bruno",
    nivel: 10
}

const {nome,nivel} = programador

Reward(programador)

console.log("\n");




/*Exemplo de conversão
*/




function Converte_Boolean(valor){
    if(valor){                   //pode ser lido como if true
        console.log("OK");
    }
}

Converte_Boolean("")  //Converte em falso, por isso náo exibe OK
Converte_Boolean(" ") //Converte em true, exibe ok

Converte_Boolean(undefined) //Converte em falso, por isso náo exibe OK
Converte_Boolean(null)      //Converte em falso, por isso náo exibe OK
Converte_Boolean(0)         //Converte em falso, por isso náo exibe OK
Converte_Boolean(Infinity)  //Converte em true, exibe Ok