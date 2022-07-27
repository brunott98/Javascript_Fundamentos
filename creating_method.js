String.prototype.tittle = function(){
    return this[0].toUpperCase() + this.slice(1)
}

console.log('javascripting with Bruno'.tittle()) 