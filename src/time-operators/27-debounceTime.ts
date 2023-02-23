/* 
* Operador debounceTime

Este operador nos cuenta cuántas milésimas de segundo han pasado desde la última 
emisión del observable. Cuando pase el tiempo puesto como argumento del operador,
mandará la última emisión y rechazará todas las demás
*/

import { fromEvent } from "rxjs";
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { observer } from "../observer";

// Ejemplo 1
// const click$ = fromEvent<PointerEvent>( document, 'click' ).pipe(
//     debounceTime(3000)
// )
// .subscribe(observer);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    // * TIP
    // esta es una manera de acceder al value ya que el pluck se va a deprecar
    map(e => (e.target as HTMLInputElement).value ),
    // podríamos emplear este operador para que no mande la misma petición dos
    // veces seguidas
    distinctUntilChanged()
)
.subscribe(observer);