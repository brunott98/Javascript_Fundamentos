/*
This serve para referenciar um objeto do contexto da execução


Um exemplo disso é criar um objeto a partir de um molde que chamamos de classe!

Por exemplo podemos criar uma classe chamada aluno, onde aluno possue nome e nota, dois atributos!
Ou seja a classe definou como será criado os objetos, cada objeto tera seu próprio valor.


this acessa o "dono" do contexto

*/

const pessoa = {
    saudacao:"Bom dia",
    falar(){
        console.log(this.saudacao)  //This faz referencia ao objeto pessoa, podemos tb escrever pessoa.falar que é o mesmo
    }
}

pessoa.falar() //Como método, o this funciona -> Bom dia 

const falar = pessoa.falar //Mas ao chamar como função aqui ocorre perca do this, pois não existe um objeto a  ser referenciado.

falar()   //Undefined, conflito entre paradigmas OO e funcional 


/*Portanto para isso podemos utilizar o método bind */

const falando = pessoa.falar.bind(pessoa)

falando()  //Bom dia, portanto sempre use o bind quando quer buscar uma função de um objeto!

//Sem o uso do bind, abaixo:

function Person(){

    this.age = 0;
    const self = this

    setInterval(function(){  //Set interval chama a função a cada 1 segundo
        self.age++
        console.log(self.age)
    },1000)


}

new Person

