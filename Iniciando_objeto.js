/*
Podemos acessar propriedade do objeto tanto pela notação ponto

carro.proprietario

quanto pela notação

carro['proprietario']['endereco']['logradouro'] = Avenida Brasil

carro.proprietario.length
delete carro.proprietario



*/

//1 - Objeto literal

const car1 = {}

const car2 = Object.freeze({nome: "Camaro"}) 
car2.nome = "Ferrari"
console.log(car2)

//2 - Via conversor Object

let character = "Diluc"

const obj_character = new Object(character)
console.log(obj_character) //[String: 'Diluc']

const power =  new Object()
console.log(power)  // {}

//3 - Via função construtora

function personSubmit(id,_name){
    
    this.id = id
    this._name = _name

    this.getPerson = () => { 
    
        return console.log(this.id,this._name)
    }

}

const ps1 = new personSubmit(001,"John")

ps1.getPerson()  // 1 John

const ps2 = new personSubmit(002,"Wallace")

ps2.getPerson() // 2 Wallace

// 4 - Via Function Factory


function characterRarity(_name,_stars){

    return {

        name: _name,
        stars: _stars

    }

}

const Diluc = characterRarity("Diluc","5 Stars")
const Kaeya = characterRarity("Kaeya","4 Stars")


console.log(Diluc)
console.log(Kaeya)

Object.freeze(Diluc)  //Não permite alterar o objeto mais.
Diluc.name = "Venti"
console.log(Diluc)


//5 - Via Object.create

const travel = Object.create(null)
travel.destiny = "São Paulo"

console.log(travel) //[Object: null prototype] { destiny: 'São Paulo' }

//6 - Via JSON

const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)  //Sou um JSON



/************************************************* */

const a = 1;
const b = 2;
const c = 3;

const object_zero = {a,b,c}
console.log(object_zero)  //{ a: 1, b: 2, c: 3 }

/* Também podemos nos deparar com coisas assim */


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)  //{ nota: 7.87 }

const obj4 = {[nomeAttr]:valorAttr} 
console.log(obj4)   //{ nota: 7.87 }

const obj5 = {
    function1: function(){
        //code
    },

    function2(){
        //code
    }
}