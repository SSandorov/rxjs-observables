/* 
* Operador take

Limita la cantidad de emisiones que un observable puede enviar y lo completa

*/

import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    // con el tap comprobamos que emite tres valores y se completa, no emite
    // el resto de valores
    tap(t => console.log('tap: ', t)),
    take(3)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
});