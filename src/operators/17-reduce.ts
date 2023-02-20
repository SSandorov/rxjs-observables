/* 
* Operador Reduce

El operador reduce aplica una función acumuladora a las emisiones producidas por mi
observable.

El observable emite sus valores y estos se acumulan en el operador reduce. Cuando se 
complete el observable el operador devolverá la acumulación de todas las emisiones.
Así que sólo devolverá un valor final a los subscriptores.

Como segundo argumento recibe el valor inicial que nosotros le especifiquemos,
sino el valor es 0
*/

import { interval } from "rxjs";
import { reduce, take, tap } from 'rxjs/operators';

/* 
* Operador take

Completa el observable después de las veces que yo especifique como su argumento
*/

//* También existe en JS
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);

console.log('total reduce JS: ', total);

interval(1000)
.pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer, 5)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});