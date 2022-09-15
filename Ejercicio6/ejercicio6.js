/*

Ejercicio 6
Crea una función que redondee un número float a un número específico de decimales.
La función debe tener dos parámetros:
Primer parámetro es un número float con x decimales
Segundo parámetro es un int que indique el número de decimales al que redondear

Evitar usar el método toFixed()

*/
var roundTo = function (num, decimals) {
    console.log('____START____');
    // Obtenemos los decimales. Para ello, recuperamos todo lo que esta despues del punto.
    var getDecimals = num.toString().split('.');
    // Modificamos la longitud de los decimales.
    var setLengthDecimals = getDecimals[1].substring(0, decimals);
    console.log('setLengthDecimals: ' + setLengthDecimals);
    /* Recuperamos el número siguiente al corte de los decimales que utilizaremos para determinar si redondeamos los decimales a mostrar.
        Ejemplo: Si introduce 2.147 y pide redondear 2 decimales. Evaluaremos el 3er decimal( que seria: 7) para determinar si redondeamos los dos decimales
        que nos ha solicitado el usuario, dando como resultado: 2.15
    */
    var lastNumDecimal = getDecimals[1].charAt(setLengthDecimals.length);
    console.log('lastNumDecimal: ' + lastNumDecimal);
    // Parseamos a integer para poder sumar uno y hacer el redondeo adecuado.
    var decimalToInt = parseInt(lastNumDecimal);
    // Operador ternario, si el número es mayor a 5 y menor a 8, le sumamos 1, de lo contrario queda igual.
    var roundDecimal = decimalToInt >= 5 && decimalToInt <= 9 ? parseInt(setLengthDecimals) + 1 : parseInt(setLengthDecimals);
    console.log('roundDecimal: ' + roundDecimal);
    // Concatenamos el getDecimals[0] que sería en este caso el primer array sacado del primer split. Que en todo caso sería lo mismo que la variable num
    var concatNumDecimals = getDecimals[0].concat('.' + roundDecimal);
    // Parseamos para tener los números y trabajar con los valores adecuados.
    var getDecimmalsToInt = parseFloat(concatNumDecimals);



    console.log('getDecimmalsToInt: ' + getDecimmalsToInt + ' ' + typeof getDecimmalsToInt);
    console.log('___________________________________________');
    console.log('roundTo( ' + num + ', ' + decimals + ')');
    console.log('-------------------------------------------');
    console.log('Original number: ' + num);
    
    
    return getDecimmalsToInt;


};
console.log(' Rounded number: ' + roundTo(4.15544, 2));
console.log('___________________________________________');
