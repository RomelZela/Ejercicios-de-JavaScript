/*
Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
*/

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

const truthyValues = arrDirty.filter(value => value && typeof value === 'string')

console.log(truthyValues)
