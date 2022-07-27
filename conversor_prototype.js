String.prototype.reverse = function(){  //Reverse não  existe

    return this.split('').reverse().join('')

}        

console.log('Bruno'.reverse())

Array.prototype.first = function(){

    return this[0]
}

console.log([9,8,7].first()) //9

/*

Perigo, cuidado ao modificar funções que já existem nos prótotipos

String.protoype.toString(){
    return 'Não faça isso!'
}

console.log('Bruno'.reverse())  //!ossi açaf oãN

*/

/***************************************/


String.prototype.tittle = function(){
    return this[0].toUpperCase() + this.slice(1)
}

console.log('onimusha'.tittle())

