
function Avalia_Programador({nivel=null}){
    if(nivel<=5){

        console.log(`O programador ${nome} é novato, nível: ${nivel}`)

    }else if(nivel>5 && nivel<=7){

        console.log(`O programador ${nome} é avançado, nível: ${nivel}`)

    }else if(nivel>7&& nivel<=10){
        
        console.log(`O programador ${nome} é expert, nível: ${nivel}`)

    }else {

        console.log(`O programador ${nome} é lendário, nível: ${nivel}`)

    }


}


const programador ={
    nome: "Bruno",
    nivel: 11
}

const {nome,nivel} = programador


Avalia_Programador(programador)