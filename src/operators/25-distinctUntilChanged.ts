/* 
* Operador distinctUntilChange

A diferencia del operador disntinct, este emite los valores del observable mientras
que la emisión anterior no sea la misma a la actual
*/

import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
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
        nombre: 'Zero',
    },
];

from( personaje ).pipe(
    // con un objeto tenemos que especificar dos argumentos.
    // el objeto actual y el objeto anterior. En caso de que el return sea true,
    // nos bloqueará la emisión repetida
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
)
.subscribe(observer);

// const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

// numeros$.pipe(
//     distinctUntilChanged()
// )
// .subscribe(observer);