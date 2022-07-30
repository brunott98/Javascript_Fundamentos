Array.prototype.filter2 = function(operacao){
    const help_array = []

    for(let i = 0; i<this.length;i++)

        if (operacao(this[i],i,this)){
            help_array.push(this[i])
}
    return help_array
}


const produtos = [

    {nome:'Notebook', preco:2499, fragil:true},
    {nome:'iPad Pro', preco:4199, fragil:true},
    {nome:'Copo de vidro', preco:12.49, fragil:true},
    {nome:'Copo de plastico', preco:18.99, fragil:false}
     
]
/*
console.log(produtos.filter(function caro_fragil(product){

    if(product.fragil ==true && product.preco>1500){
        return true;
    }else {
        false
    }
})) */



console.log(produtos.filter2(function caro_fragil(product){

    if(product.fragil ==true && product.preco>1500){
        return true;
    }else {
        false
    }
}))


