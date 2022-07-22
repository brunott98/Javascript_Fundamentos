/*Usando class 

class Pessoa{
    constructor(nome){
        this.nome = nome
    }


    falar(){

        console.log(`Meu nome é:${this.nome}`)

    }
}

const p1 = new Pessoa("João")  //Construi um objeto passando o parametro joão
p1.falar()  //Invoquei o método

*/

/*
Usando Function Factory

portanto use function factory!
não usa this e não usa new.

*/



const createPerson = nome =>{

    return {
        talk: () => console.log(`Meu nome é ${nome}`)   //O objeto do retorno tem noção do contexto léxico, ou seja, consegue buscar informações do parametro da função
    }

}

const p2 = createPerson("joão")
p2.talk()

