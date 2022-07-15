/*Utilizaremos o Number.prototype para garantir que seja trabalhado number. */
/*O this referencia ao objeto Number, a uma propriedade  */

Number.prototype.entre = function(inicio,fim){  
    return this >= inicio && this <= fim
}

const resultado = function(nota){

    if(nota.entre(9,10)){

        console.log("Quadro de Honra")

    }else if(nota.entre(7,8.99)){

        console.log("Aprovado")

    }else if(nota.entre(4,6.99)){

        console.log("Recuperação")

    }else if(nota.entre(0,3.99)){

        console.log("Reprovado")

    }else{

        console.log("Nota invalida")

    }    
}

resultado(10)
resultado(7.5)
resultado(8)
resultado(4)
resultado(12)