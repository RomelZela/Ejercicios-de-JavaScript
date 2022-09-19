/*
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:
const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
 
console.log(result); // lorem ipsum

*/
//Ejercicio 10 resuelto

function removeHTMLTags(html_xml) {
    var regex = /(<.[^><]+>)/g;
   html_xml = html_xml.replace(regex, '');
 return html_xml
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result);