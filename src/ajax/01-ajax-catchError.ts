/* 
* Peticiones AJAX

*/
/* 
* Operador catchError

El operador catchError no permite que las emisiones del observable que tengan un error sean mandadas.

Una vez parada la emisión, podemos mandar un mensaje de error, podemos devolver un nuevo observable, ...
*/

import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { observer } from '../observer';

const url = 'https://api.github.com/users?per_page=5';
const url1 = 'https://api.github.com/usersXXXXX?per_page=5';

// Manejamos el error de esta manera, así podemos aplicarle el tipado correcto
const manejarErrores = (err: AjaxError) => {
    console.warn('error en: ', err.message);
    return of([]);
}

ajax( url1 ).pipe(
    map(resp => resp.response),
    // Para manejar los errores con AJAX empleamos el operador catchError
    catchError(manejarErrores)
)
.subscribe(observer);

