/*
Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.
Ejemplo de uso de la función:

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]


*/

// Ejercicio 11 resuelto!!!

    const splitArrayIntoChunks = (array, numberToSplit) => {

        let index = 0;
        let innerArraysSplit = [];
        

        do{
            console.log('array original antes del do: ' + array)
            innerArraysSplit.push(array.splice(index, numberToSplit >= array.length ? array.length : numberToSplit))

            console.log(array.length + ' array.length')
            console.log(numberToSplit + ' numbertoSplit')
        }
        
        while(array.length > 0)
        return innerArraysSplit
    }


    const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7, 8], 7)

    console.log(result)
    