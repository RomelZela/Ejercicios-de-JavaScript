/*
Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La función debe tener dos parámetros:
● Primer parámetro es un objeto con x número de campos y valores
● Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
Ejemplo de uso de la función:

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result);  resultado: {a: 1, c: 3}

*/
const inputValues = (filterValues, ...params) => {
        return filterValues(params);

}

const filterValues = (params) => {
        return params.filter(falseValues => falseValues == false)

}

const result = inputValues(filterValues, 3, true, false, "", 0, true)

console.log(result)


