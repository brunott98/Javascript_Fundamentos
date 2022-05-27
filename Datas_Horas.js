/*
Javascript básico inclui uma construtora Date() para criar objetos que representam datas e horas
Esses objetos Date possuem metodos que fornecem uma API para cálculos simples de data.
Date não são do tipo fundamental

*/


let tempus_fugit = new Date(2022,0,1)   //Onde 2022 é o ano,  0 é o mês primeiro(1), e 1 é o dia.

let tempus_regit_actum = new Date(2022,0,1,23,10,45)  // Mesmo dia porém as 23:10:45

let antes = new Date(2022,4,26,0,0,0)     
let agora = new Date()      //Captura o dia e hora atual quando o parâmetro está vazio

let diferença_entre_datas = agora - antes  //diferença entre datas, resposta em intervalo de milissegundos 

console.log(diferença_entre_datas)

console.log(antes.getFullYear())  //Entrega o ano completo
console.log(antes.getMonth())   //Entrega o mês
console.log(antes.getDate())   //Entrega o número do dia
console.log(antes.getDay())   //Entrega o dia da semana  onde 0 é domingo no caso dia 26 caiu em uma quinta feira, logo 4
console.log(antes.getHours()) //Entrega a hora local, no caso 0 horas, meia noite.
console.log(antes.getUTCHours()) //Entrega a hora de acordo com o fuso horário, no caso 3.

console.log(antes.toDateString())  // Thu May 26 2022 - Quinta feira maio 26 de 2022

console.log(antes.toUTCString())  // Thu, 26 May 2022 03:00:00 GMT -  Quinta feira maio 26 de 2022 03 horas GMT
console.log(antes.toLocaleDateString())  // 26/05/2022 data local   
console.log(antes.toLocaleTimeString())  // 00:00:00 horário local
console.log(antes.toISOString())  // 2022-05-26T03:00:00.000Z -->  somente ES5
