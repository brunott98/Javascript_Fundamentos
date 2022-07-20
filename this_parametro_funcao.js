function comparaComThis(param){
    console.log(this===param)
}
comparaComThis(global) // true this faz referencia ao global

console.log("\n")

const obj ={}

comparaComThis = comparaComThis.bind(obj)

console.log("\n")

comparaComThis(global)  // false 
comparaComThis(obj) // true this faz referencia faz ao objeto 

console.log("\n")

let ComparaComThisArrow = (param) =>{
    return console.log(this===param)
}

ComparaComThisArrow(global)   /*Ele vai imprimir false aqui, pois esse this se referencia ao seu próprio modulo (coisa da arrow function) 
                                e não ao objeto global da aplicação. Para fazer isso retornar true pra gente é só fazer isso:*/

ComparaComThisArrow(module.exports) //True 
ComparaComThisArrow(this) /* True   sso quer dizer que estamos referenciando a esse mesmo modulo da arrow function 
(digamos que estamos referenciando ao seu escopo local da função). As duas implementações acima estão corretas.  */


