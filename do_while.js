/* Do while, primeiro executa o que está no bloco e depois verifica */

function Sorteio(min=-1,max=11){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1

do{

    opcao = Sorteio();
    console.log(`Opcao escolhida foi ${opcao}.`);
    
}while(opcao != -1) 

 /*na ultima exececução quando der o valor estabelecido ele irá parar. Aplicação interessante para momentos em que 
 a varíavel já está no valor que deve parar quando se repetir */

console.log("Fim.")