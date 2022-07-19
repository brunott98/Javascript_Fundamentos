const numeros ={

    dobro(a){
        return resultado = 2 * a;   
    },

    triplo(a){
        return resultado = 3 * a;   
    },

    quadrado(a){
        return resultado = a*a;
    }
   
}

const dobro = numeros.dobro.bind(numeros);
const triplo = numeros.triplo.bind(numeros);
const quadrado = numeros.quadrado.bind(numeros);

console.log(dobro(4),triplo(4),quadrado(4))  // 8, 12 e 16



