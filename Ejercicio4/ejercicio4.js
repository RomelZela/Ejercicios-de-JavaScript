
/*
Dado tres arrays de números, sacar en un nuevo array la intersección de estos.
*/

// Solución ejercicio 4

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];


// Arrays ordenados y posterior intersección:

const intersectionArr1wArr2 = arrNumber1.filter(n => arrNumber2.includes(n))
const intersectionArr1_2w3 = arrNumber3.filter(x => intersectionArr1wArr2.includes(x))

console.log(intersectionArr1_2w3)