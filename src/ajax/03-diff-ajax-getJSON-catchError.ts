/* 
* Diferencia entre getJSON y AJAX

el getJSON nos devuelve directamente el response de la petición, en lugar de todo el body como es el caso
de la petición ajax
*/

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';
import { observer } from "../observer";

const manejarError = (resp: AjaxError) => {
    console.warn('error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

const url = 'https://httpbin.org/delay/1';
const url1 = 'https://httpbinxx.org/delay/1';

// Manejamos los errores de esta manera
// const obs$ = ajax.getJSON(url1).pipe(
//     catchError(manejarError)
// );
// const obs$2 = ajax(url1).pipe(
//     catchError(manejarError)
// );

// * Manera completa de manejar los errores empleando el observer y el catchError
// Utilizamos un observer que maneja los errores directamente
const obs$ = ajax.getJSON(url1);
const obs$2 = ajax(url1);
                // definimos el observer
obs$.pipe(
    // el catchError coge el error y lo corrige
    catchError(manejarError)
)
.subscribe({
    // como el catchError ya cogió el error, directamente se ejecuta el nexy y después el complete
    // del observer
    next: val => console.log('next: ', val),
    error: err => console.warn('error: ', err),
    complete: () => console.log('complete')
});
obs$2.pipe(
    catchError(manejarError)
)
.subscribe({
    next: val => console.log('next: ', val),
    error: err => console.warn('error: ', err),
    complete: () => console.log('complete')
});