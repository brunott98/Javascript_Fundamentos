function getPreco(imposto = 0, moeda = "R$"){
    return `Preço: ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}\n` 
}

const produto = {
    nome:"Notebook I9",
    preco: 12000,
    desc: 0.15,
    getPreco
}

const carro = {
    preco: 6000000,
    desc: 0.20,
    getPreco
}


console.log(carro.getPreco())  //Preço: R$ 4800000

console.log(getPreco.call(carro,0))          //Passando 0% de imposto e moeda default: real. Preço: R$ 4800000

console.log(getPreco.call(carro,0.20,"$"))  //Passando + 20% de imposto em cima do preço com desconto e moeda dolar.
                                            //Preço: $ 5760000

console.log(getPreco.apply(carro,[0.10,"$"])) //Passando + 10% de imposto em cima do preço com desconto e moeda dolar.