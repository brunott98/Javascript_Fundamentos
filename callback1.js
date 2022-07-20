 "Use strict mode"
 
const characters = ["Tartaglia","Thoma","Kazuha","Bennett"];

function imprimir(nome,indice){
    console.log(`${indice + 1},${nome}`)
}

console.log("\n")

characters.forEach(imprimir) //Chama a função imprimir para cada indice do array.

console.log("\n")

characters.forEach(aumenta = (a) =>{
    return console.log(a.toUpperCase())
})

console.log("\n")

const damage = [1000,50,700,40]

let low_damage = damage.filter(abaixo_de_700 = (damage) =>{
    return damage < 700
})

console.log(low_damage)
console.log(damage)