/* Ejercicio1
Dado un array de objetos, obtener el objeto con el id 3
*/

const arrNames = [
{id: 1, name: 'Pepe'},
{id: 2, name: 'Juan'},
{id: 3, name: 'Alba'},
{id: 4, name: 'Toby'},
{id: 5, name: 'Lala'}
]

// Solución 1
const getDataWithID = (id) => {
   console.log(arrNames[id]) ; // Podriamos tener la solución solo con esta linea. Cambiando "ID" por 2int .
}
getDataWithID(2);


// Solución 2
const getDataWithFilter = arrNames.filter(name => name.id === 3);
console.log(getDataWithFilter)

/* La principal diferencia es que con la solucion 2, se devuelve un array de objeto.


*/