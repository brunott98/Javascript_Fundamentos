/*Nomenclatura 
convem que atributos que começam com underline são identificáveis como privados

*/

const sequencia = {
    _valor:1,
    get valor(){
        return this._valor++
    },
    
    set valor(valor){

        if(valor>this._valor){

            this._valor =  valor

        }
        
    }
}

console.log(sequencia.valor, sequencia.valor)


const person1 ={

    _name:  null,

    set newName(name){              //Setter servem para alterar o valor de uma propriedade

        this._name = name
        
    },

    get showName(){             //Getters servem para recupera-los

        return console.log(this._name);

    }
    

}

person1.newName = "João"   //Podemos pensar como se fosse uma função onde mudamos diretamente o valor da propriedade, como se fosse uma v
person1.showName         // João  como se fosse uma chamada de método onde o método é uma propriedade

person1.newName = "Bruno" 
person1.showName    //Bruno



const person2 ={

    name:null,

    setName(newName){
        this.name = newName; 

    },

    getName(){
        console.log(this.name)
    }

}

person2.setName("Nicolas")
person2.getName()

person2.name = "Eduardo"
person2.getName()

person1._name = "Lauro" 
person1.showName


console.log(Object.keys(person1))   //[ '_name', 'newName', 'showName' ]
console.log(Object.values(person1)) //[ 'Lauro', undefined, undefined ]
console.log("\n")

/******************************************************************* */


const Car = {
    model: "Mustang Shelby GT500",
    year: 2022,
    price: 650000.
}

console.log(Object.entries(Car)) //[ [ 'model', 'Mustang GT' ], [ 'year', 2022 ], [ 'price', 650000 ] ]  

console.log("\n")

//Aplicação interessante

Object.entries(Car).forEach( array =>{

    console.log(array[0],array[1])

})

console.log("\n")

Object.entries(Car).forEach( ([chave,valor]) =>{  //Usando destructuring no array

    console.log(chave,valor)

})

console.log("\n")

Object.defineProperty(Car,'color',{  //Defindo como uma propriedade é
    enumerable: true,  //visivel no .keys
    writable: false,  //Não pode ser sobrescrita
    value: 'Black'   
})

Car.color = 'White'

console.log(Car.color)
console.log("\n")

/*Object.assign para adcionar e sobreescrever propriedades */

const engineSetup = {
    horsePower: 760,
    rpm: 7500
}

const newPrice ={
    price: 700000
}

const update = Object.assign(Car,engineSetup,newPrice)

Object.entries(Car).forEach( ([chave,valor]) =>{  

    console.log(chave,valor)

})


/*

model Mustang Shelby GT500
year 2022
price 700000
color Black
horsePower 760
rpm 7500 

*/
