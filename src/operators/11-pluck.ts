/* 
* Operador Pluck

El operador pluck se emplea cuando necesitamos extraer un valor del objeto que
estamos recibiendo y que este valor sea la nueva emisión o salida del
observable
*/

import { fromEvent } from "rxjs";
import { pluck } from 'rxjs/operators'


// This way we could access an element of an event and 
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpPluck$ = keyUp$.pipe(
    // pluck('key')
    /* 
    * Tip
    Si quisiese acceder a un objeto dentro de otro objeto, tengo que escribir
    los nombres de las variables entre comillas
    */
    pluck('target', 'baseURI')
);

keyUpPluck$.subscribe(key => console.log('pluck key: ', key));