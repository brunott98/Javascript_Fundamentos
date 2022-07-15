function teste1(num){
    if(num>7)
        console.log(num)
        console.log("final")    
}

teste1(8) //Dessa forma ele só retorna final

/* Quando você não usa {} para o if, em js ele associa apenas uma sentença de código,
portanto ele associou somente a sentença console.log("final")  */

function teste2(num){
    if(num>7)
        console.log(num)
    console.log("final")
}

teste2(8) //Dessa forma ele só retorna ambos

/* Procure sempre usar as chaves para evitar possiveis erros de código! 
Ou cuidado com esse erro clássico

function teste_ruim(num){
    if(num>7);{

        console.log(num)
        }  

}
nesse caso vai mostrar sempre o número pois foi marcado o fim da sentença
com ;
pode reescrever o mesmo código assim
    if(num>7)
        ;
    {
        console.log(num);
    }  

portanto deve-se usar o ponto virgula apenas nas sentenças e não no if!

    */