/* 
* Operador first

Devuelve el primer valor del observable y luego lo completa
Sin argumentos nos devuelve el primer valor emitido, pero en caso de tener un argumento
nos compara las emisiones con el aegumento y nos devuelve el primero que sea igual a
la condición y luego completa el observable
*/

import { fromEvent } from "rxjs";
import { first, map, take } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    // nos devuelve la primera emisión y la completa
    // first(e  => e.clientY >= 200),
    /* 
    ! OJO
    Puede que no podamos acceder a las variables a pesar de poner el tipado
    en el observable. En ese caso debemos comprobar que el operador recibe el
    tipo correctamente, y sino lo hace, se lo especificamos
    */
    // * Desestructuración de variables en JS y TS
    map( ({ clientX, clientY }) => ({
        clientX,
        clientY
    }) ),
    // En este caso, ahora el first no recibe un pointerEvent, sino dos números
    first(e  => e.clientY >= 200),

)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
});