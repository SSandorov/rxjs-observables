/* 
* Operador distinct

Permite pasar las emisiones que no han sido previamente emitidas por el observable

tienes que ser idénticas, tanto en tipo como en valor
*/

import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";
import { observer } from "../observer";

interface Personaje {
    nombre: string
}

const personaje: Personaje[] = [
    {
        nombre: 'Megaman',
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'Zero',
    },
    {
        nombre: 'Dr. Willy',
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'Zero',
    },
    {
        nombre: 'Megaman',
    },
];

from( personaje ).pipe(
    // con un objeto tenemos que especificar el key que tiene que ser idéntico
    distinct( personaje => personaje.nombre )
)
.subscribe(observer);

// const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

// numeros$.pipe(
//     distinct()
// )
// .subscribe(observer);