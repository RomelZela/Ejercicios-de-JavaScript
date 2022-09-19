/*
Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). 
Por defecto, este parámetro debe de tener un valor de 3.
Ejemplo uso de la función:


const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB

const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB

*/


const convertFormatBytes = (bytes, precision = 3) => {

    const unitsBytes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let index = 0;

    do{
        bytes = bytes / 1000;
        index++;
    } while (bytes > 1024 || bytes < -1024);


    result = bytes.toPrecision(precision)

    return result + unitsBytes[index];
}


console.log(convertFormatBytes(1000,1))
console.log(convertFormatBytes(-12145489451.5932, 5))