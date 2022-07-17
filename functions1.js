/*

Função em JS é First-Class Object  (Citiziens)
High Order Function    

Portanto conseguimos usar a função como dado, ou seja, podemos atribuir uma função á uma variável, função pode ser parametro
etc.

 */

//Criando função literal

function update(){
    
    /*Por default retorna undefined caso não seja chamado explicitamente o retorno */


}

const new_integration = function(number){return number = number + 1;}


const services = [function new_repair(fix1,fix2){return fix1 + fix2;}, update, new_integration];
console.log(services[0](8,8));


const greetings ={
    Code: function(name){return name.toUpperCase()}
}

console.log(greetings.Code("Bom dia"))


