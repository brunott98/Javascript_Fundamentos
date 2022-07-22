function createPerson(nome){
    this.nome = nome  /*  Atribuindo o parametro nome a uma propriedade do objeto referenciado pelo this(create person) por causa do contexto de chamada p1.talk 
    onde p1 é um objeto, e no caso o this faz referencia a p1 e assim por diante.
                            */
    this.talk = function talk(){   //Tornei esse método uma propriedade do objeto criado, que para this no contexto de execução é p1, por exemplo
           
        console.log(`Meu nome é ${this.nome}`)  //Opcional usar. caso queira acessar p1.nome use o this, caso queira por exemplo corrigir --> p1.nome ="John"
                                                //Caso não queira, use nome apenas, mas não poderá altera-lo uma vez que this.nome é gravado como parametro de createPerson
    
    }

}


const p1 = new createPerson("João")
p1.talk() //Meu nome é João
p1.nome ="John"
p1.talk() //Meu nome é John

const p2 = new createPerson("Dunkan")
p2.talk()   //Meu nome é Dunkan







