
//Como setar o prototype de um Objeto? 


// 1 Via função construtora

function createPerson(nome){
    this.nome = nome
}

const p1 = new createPerson("Bruno")
console.log(p1)

const p2 = new createPerson("Gustavo")
console.log(p2)


console.log(Object.getPrototypeOf(p1))


//2 Usando o método Object.create()


//3 Usando o método Object.setPrototypeof()


const customPrototype = {
    greet(){
        return `${this.greeting} guys`
    }
}

function Greeting (term){   //função construtora sempre tem a primeira letra maiuscula
    this.greeting = term
}          

Greeting.prototype = customPrototype

const hiGreet =  new Greeting('Hi')

/****************************** */

const helloGreet = Object.create(customPrototype)
helloGreet.greeting = 'Hello'

/***********************************************/

const heyGreet = {
    greeting:'hey'
}

Object.setPrototypeOf(heyGreet,customPrototype)

customPrototype.isPrototypeof(heyGreet)  //True