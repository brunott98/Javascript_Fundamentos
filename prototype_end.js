function Character(character, characterID) {
    this.character = character
    this.characterID = characterID
}

const char1 = new Character("Diluc", 155)
const char2 = new Character("Kaeya", 154)

console.log(char1, char2)


//Simulando o new

function novo(f,...params){   //recebe a função construtora  e parametros do objeto
    
    const obj = {}
    obj.__proto__= f.prototype
    f.apply(obj,params)
    return obj

}

const char3 = novo(Character,"Zhongli", 178)

console.log(char3)

