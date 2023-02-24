/* 
* fetch API

El fetch API, a pesar de ser bueno, esta lejos de conseguir tener las mismas características que 
el AJAX API.
Entre sus desventajas están: 
    - No trabaja con observables o flujos de datos, sino que trabaja con promesas
    - Las peticiones no se pueden cancelar
    - No gestiona bien los errores en las peticiones, ya que se encarga de revisar el body de la petición,
    no el estado de la misma (si es 404, 400, 200). Por lo que si tiene body, pero tiene un error en la
    URL, el reject no podrá manejar este fallo
*/

const url1 = 'https://api.github.com/users?per_page=5';
const url2 = 'https://api.github.com/usersXXXXX?per_page=5';

const fetchPromesaCorrecta = fetch(url1);
const fetchPromesaIncorrecta = fetch(url2);

fetchPromesaCorrecta
    // El body de la petición se encuentra dentro del ReadableStream, y para acceder a ella debemos hacer
    // otra promesa.
    .then(resp => resp.json())
    // luego necesitamos otro response para poder acceder a los datos dentro del body
    .then(console.log)
    // como vemos, es muy clara la manera de gestionar las peticiones con el Fetch API, pero el inconveniente
    // es que no gestiona correctamente los errores de las petiones, como está explicado arriba
    .catch(console.log);

// * Veamos como solucionar el manejo de errores en el fetch API

// En cada response debemos manejar el posible error manualmente
// en este caso comprobamos que la respuesta sea correcta (200)
const manejaErrores = ( response: Response ) => {
    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
}

fetchPromesaIncorrecta
    // mandamos el manejo del error como primer response para que pueda comprobar si fue correcta o no
    // la petición, y entonces podemos gestionar correctamente la petición
    // ! El fetch API requiere de ejecutar un throw para que se ejecute el catch
    .then(manejaErrores)
    .then(resp => resp.json())
    .then(console.log)
    .catch(console.log);

