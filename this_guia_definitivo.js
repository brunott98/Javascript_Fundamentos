/*

this é palavra chave que referencia o escopo atual de execução
sempre retorna um objeto mas esse objeto pode mudar.

*/
/*Interpretando o código em browser, caso queira rodar o código use algum console de navegador. */

console.log(this)  //window - objeto que existe no escopo global de uma aplicação

function myFunction(){
    console.log(this)
}

myFunction()   //Ao chamar também mostrou window

/*

em Javascript sempre existe um objeto global em que todos os objetos, métodos e propriedades residem.
esse objeto pode variar, em node(back-end) é o global, em browser(front-end) é o window que representa a janela do browser.

Ao clicar em window, você visualizará que myFunction agora existe e é um método de window.

Ou seja, declarar uma função no escopo global ela é anexada ao window como um método! :)
Caso fosse no node, seria anexada ao global(nome do objeto).

então this nesse caso é o window, mas não pense que sempre que usar this dentro de uma função
ele irá referenciar o objeto global, como a função foi executada no escopo global, o this referencia o window.     */

window.alert("Oi") // Exibe uma caixa: oi 

//Mas lembre que o método alert faz parte do window, então não precisa referencia-lo.

alert("Good Morning") //Javascript já entende que esse método é pego do objeto global.

var light_saber = "Ren" //Somente para var isso vale! essa variável agora é uma propriedade do window 

window.light_saber //Retornará "Ren"

const character = {
    first_name:"Kazuha",
    last_name:"Kaedehara",
    vision:"Anemo",

    getCharacterInfo(){
        console.log(this)
    }

}
character.getCharacterInfo()  /*Dessa vez temos uma surpresa!Dessa vez o this ao invez de fazer referência ao window, 
faz referencia ao objeto no qual o método getCharacterInfo foi declarado, no caso character! :)
E isso é muito interessante, pois se this está referenciando o proprio objeto character, é possível referenciarmos, as propriedades
e metodos desse objeto usando this.

conforme no exemplo abaixo

*/

const character = {
    first_name:"Kazuha",
    last_name:"Kaedehara",
    vision:"Anemo",

    getCharacterInfo(){
        
        console.log(`${this.first_name} ${this.last_name}\n${this.vision}`)
    }

}
character.getCharacterInfo() /* 

Kazuha Kaedehara
Anemo

*/

/*Podemos melhorar o código, já que o this.propriedade acabou poluindo o código, vamos aplicar um destructuring em cima do this! */


const character = {
    first_name:"Kazuha",
    last_name:"Kaedehara",
    vision:"Anemo",

    getCharacterInfo(){
        const { first_name,last_name,vision } = this
        console.log(`${first_name} ${last_name}\n${vision}`)
    }

}

character.getCharacterInfo() 

/* 

Kazuha Kaedehara
Anemo

*/


const character = {
    first_name:"Kazuha",
    last_name:"Kaedehara",
    vision:"Anemo",

    getCharacterInfo(){
        const { first_name,last_name,vision } = this
        return `Nome:${first_name} ${last_name}\nVisão:${vision}`
    },

    showFullInfo(){
        const char_info = this.getCharacterInfo()

        console.log(`${char_info}\nFrase: Andando nesse mundo, é natural se deparar com dificuldades. Ao encontrar você evoluí bastante, tanto a nível de habilidades de luta quanto a nível de autoconhecimento. Acho que a minha vida pela frente será mais tranquila.`)
    }

}

character.showFullInfo() /*

Kazuha Kaedehara
Anemo
Frase: Andando nesse mundo, é natural se deparar com dificuldades. Ao encontrar você evoluí bastante, tanto a nível 
        de habilidades de luta quanto a nível de autoconhecimento. Acho que a minha vida pela frente será mais tranquila.

*/


/*
Ao usar o this dentro de um método ele fez referencia ao próprio objeto o qual esse método declarado(que é o character),
mas nem sempre isso acontece, pois o valor do this depende do contexto de invocação que está usando o this, depende portanto de como a função
é executada e não do lugar onde é declarada.

nesse caso a forma que essa invocação do método showFullInfo() é realizada, é o que determina o valor do this dentro dele,
mas isso pode mudar, conforme no exemplo a baixo, onde tentamos invocar o método como uma função através de referenciação
referenciando ele.


*/

const character = {
    first_name:"Kazuha",
    last_name:"Kaedehara",
    vision:"Anemo",

    getCharacterInfo(){
        const { first_name,last_name,vision } = this
        return `Nome:${first_name} ${last_name}\nVisão:${vision}`
    },

    showFullInfo(){
        console.log(this)
        
        const char_info = this.getCharacterInfo()
        console.log(`${char_info}\nFrase: Andando nesse mundo, é natural se deparar com dificuldades. Ao encontrar você evoluí bastante, tanto a nível de habilidades de luta quanto a nível de autoconhecimento. Acho que a minha vida pela frente será mais tranquila.`)
    }

}

character.showFullInfo()  //aqui especificamos qual objeto é chamado o método, aqui o objeto e método estão diretamente conectados!

const showFullInfo = character.showFullInfo //Não estamos invocando, só estamos referenciando ele e armazenando ele na const.

showFullInfo() //Resulta em erro -> this.getCharacterInfo is not a function, pois dessa forma ele procure dentro do window um método showFullInfo() que não existe.
  


/*
Observe que graças a invocação showFullInfo() apareceu o objeto global window dentro do método, mesmo sendo um método declarado dentro do objeto character.
Pois o contexto de execução assumida é o this global, afinal isso character.showFullInfo() é diferente disso showFullInfo().

você pode colocar console.log(this) na definição da função showFullInfo(){} na versão anterior e verificar que o this dele para a chamada character.showFullInfo() é character{}!
*/


/*
Portanto evite usar atribuição do método por referencia, não funciona, a não ser que use bind.


só considere esse momento da invocação -> showFullInfo() que é como se fosse this.showFullInfo()

*/

/*Independete de como você invocar uma arrow function, ela não possuirá this próprio */


const character = {
    first_name:"Kazuha",
    last_name:"Kaedehara",
    vision:"Anemo",

    getCharacterInfo(){
        const { first_name,last_name,vision } = this
        return `Nome:${first_name} ${last_name}\nVisão:${vision}`
    },

    showFullInfo(){
        const char_info = this.getCharacterInfo()

        console.log(`${char_info}\nFrase: Andando nesse mundo, é natural se deparar com dificuldades. Ao encontrar você evoluí bastante, tanto a nível de habilidades de luta quanto a nível de autoconhecimento. Acho que a minha vida pela frente será mais tranquila.`)
    },

    elementalSet: () =>{
        console.log(this)
        console.log(`Visão:${this.vision}\nHabilidade elemental:Chihayaburu\nSupremo:Lâmina de Kazuha `)
    }

}

character.elementalSet()

/*

Window 
Visão:undefined
Habilidade elemental:Chihayaburu
Supremo:Lâmina de Kazuha 

Note que deu errado, pois nesse caso o this faz referencia ao objeto global window

o This da arrow function depende do escopo em que o this da arrow function foi declarada
o método elementalSet foi declarado dentro do objeto character que está definido no escopo global 

*/

class ElementalSkills{          
    constructor(value){ 
        this.ElementalAbilitie =  value     //método consctructor por default value
    }
    
    isThisEqualObj(){
        console.log(this===obj)
    }



}


const obj = new ElementalSkills('value')

obj.isThisEqualObj() //true, dentro de classe ou função construtora o this referencia o objeto criado a partir dessa classe.


class ElementalSkills{          
    constructor(value){ 
        this.ElementalAbilitie =  value     //método consctructor por default value
    }
    
    isThisEqualObj(){
        console.log(this===obj)

        setTimeout(()=>{

        console.log(this===obj)

        },1000)
    }



}


const obj = new ElementalSkills('value')

obj.isThisEqualObj()   /*True mesmo para a arrow function, pois o this dentro de uma arrow function, representa o this do escopo

em que a arrow function foi declarada, no caso o escopo do método isThisEqualObj, e vimos que o this nesse escopo referencia o obj, portanto a arrow function referencia 
também


*/



/*É bom evitar o uso do this, pois de certa forma ele é imprevisivel. Podemos usar factory functions ao invez de classes ou funções construtoras

Em js, qualquer função pode retornar um objeto e quando faz isso sem o uso da palavra new
ela é uma factory function.


*/

class Cat {
    constructor (name){
        this.name = name 
    }
    getName(){
        return this.name
    }
}

const myCat = new Cat('Leona')

console.log(myCat.getName())


//Fazendo a mesma coisa sem this and new

const makeCat = name => ({
    getName:() => name
})
const myCat = makeCat("Leona")

console.log(myCat.getName())