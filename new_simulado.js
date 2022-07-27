/* Simulando o new */

function createPerson(name,age){

    this.name = name;
    this.age = age;

}

function novo(f,...params){

    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj,params);
    return obj;

}

const p1 = novo(createPerson,"Lucas","14")
console.log(p1)

const p2 = novo(createPerson,"William","14")
console.log(p2)
