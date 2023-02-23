/* 
* Operador distinctUntilKeyChanged

Este operador, a diferencia del operador distinctUntilChanged, compara los valores
de un objeto, y si dos se repiten consecutivamente, no emite el repetido
*/

import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";
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
    distinctUntilKeyChanged( 'nombre' )
)
.subscribe(observer);