/*Cuidado ao usar o sort em array, pois modifica seu estado original */

myArray = [1,2,3]

myArray[11] = 999

myArray.sort()
console.log(myArray.length)  //12

delete myArray[0]  //Não reeordena, por isso é interessante usar o sort

console.log(myArray)  //[ <1 empty item>, 2, 3, 999, <8 empty items> ]

myDays = [12,15,19]

myDays.splice(0,1,10)   //Posição, quantidade de elementos escolhidos e valor
console.log(myDays)  //[ 10, 15, 19 ] 

myDays.splice(0,1)   //Posição, quantidade de elementos escolhidos e valor
console.log(myDays)  //[15, 19 ] 

myDays.splice(0,1,100,155)   //Posição, quantidade de elementos escolhidos e valor
console.log(myDays)  //[ 100, 155, 19 ]

myDays.splice(0,3,222,444,888)   //Posição, quantidade de elementos escolhidos e valor
console.log(myDays) //[ 222, 444, 888 ]
