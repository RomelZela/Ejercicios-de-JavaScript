/*
Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. 
El valor de isSpain será un booleano indicando si es una ciudad de España.

Ejemplo: {city: "Logroño", isSpain: "true"}

Respuesta ejercicio 5:
*/

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  const arrNoCapSp = arrCities2.filter(citiesSP => citiesSP.capital === false);

  for(let i=0;i<arrNoCapSp.length;i++){
    
    arrNoCapSp[i].isSpain = (arrNoCapSp[i].country === 'Spain' ? true : false)

    delete arrNoCapSp[i].country;
    delete arrNoCapSp[i].capital;

    
}


  console.log(arrNoCapSp)

