//Factory simples

function criarPessoa(){
    return{
        nome:'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

console.log("\n")

/*-------------------------------------------- */

function cadastro_produto(nome, preco){

    return {
        nome,
        preco,
        desconto: (0.1)*preco     
}

}

let registro_iphone12 = new cadastro_produto("Iphone 12",10000)
let registro_NotebookI7 = new cadastro_produto("Notebook I7",7500)

console.log(registro_iphone12)      // { nome: 'Iphone 12', preco: 10000, desconto: 1000 }
console.log(registro_NotebookI7)    // { nome: 'Notebook I7', preco: 7500, desconto: 750 }