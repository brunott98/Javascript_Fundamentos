
function Carro(velocidade_maxima = 200, delta = 5){
    
    let velocidade_atual = 0;  //Atributo privado - para privar basta usar let ou const :)

    this.acelerar = function(){     //Fazendo acelerar ser um método público através do this

        if(velocidade_atual + delta <= velocidade_maxima){
            
            velocidade_atual = velocidade_atual + delta;

        }
        else{

            velocidade_atual = velocidade_maxima;

        }

    }

    this.get_velocidade_atual = function(){     //Método publico para exibir a velocidade atual 
        return velocidade_atual;
    }
   
    }

const uno = new Carro

uno.acelerar()
console.log(uno.get_velocidade_atual())  //5


const ferrari = new Carro(350,20)
ferrari.acelerar()  
console.log(ferrari.get_velocidade_atual())  //20
ferrari.acelerar() 
console.log(ferrari.get_velocidade_atual())  //40

console.log(typeof(Carro)) //function
console.log(typeof(uno)) //object
