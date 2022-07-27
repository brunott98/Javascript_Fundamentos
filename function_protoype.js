function meuObjeto(){}

console.log(meuObjeto.prototype)

const obj1 =  new meuObjeto
const obj2 =  new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__ ) //True, objetos gerados por função construtora tem o mesmo prototype
console.log(obj1.__proto__ === meuObjeto.prototype) //True acessar o prototipo é igual ao prototipo

meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = "Rafael"
obj2.falar()

const obj3 =  {}

obj3.__proto__ = meuObjeto.prototype //Estou mudando o prototipo de obj3 que era Object.prototype para meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()


//Portanto
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)