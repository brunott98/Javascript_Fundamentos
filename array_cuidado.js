/*Cuidado ao usar o sort em array, pois modifica seu estado original */

myArray = [1,2,3]

myArray[11] = 999

myArray.sort()
console.log(myArray.length)  //12
console.log(myArray)  //[ 1, 2, 3, 999, <8 empty items> ]