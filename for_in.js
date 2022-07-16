const notas = [8,7,5,7]
/*For i in, percorre os indices 
Não esquece de usar o let para não acessar essa váriavel fora do escopo dela!
*/
for(let i in notas){

    console.log(`Indice:${i}\nNota:${notas[i]}\n`);

}

const character = {
    Name:"Childe",
    Codename: "Tartaglia",
    Vision: "Hydro",
    Constelation: "Monoceros Caeli"
}


for(let atributes in character){

    console.log(`${atributes}: ${character[atributes]}`)

}