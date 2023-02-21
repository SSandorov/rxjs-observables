/* 
* Operador Scan

Es un operador muy similar al operador reduce

La diferencia se encuentra en que cuando mi observable emite sus valores, estos son 
acumulados y mandandos a los subscriptores en cada emisión. Y a diferencia del reduce,
cuando se completa el scan no manda nada a los subscriptores, ya que en la última
emisión del observable el operador mandó a los subscriptores el total acumulado

* TIP: El operador scan puede ser la base para el patrón REDUX
*/

import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

                        // acumulado y actual
const totalAcumulador = (acc, cur) => {
    return acc + cur;
}

// Comparamos con el reduce
from( numeros )
.pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(reduce => console.log('reduce: ', reduce));

// Uso del scan
from( numeros )
.pipe(
    scan(totalAcumulador, 0)
)
.subscribe(scan => console.log('scan: ', scan));

// REDUX
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {
        id: 'Fher',
        autenticado: false,
        token: null,
    },
    {
        id: 'Fher',
        autenticado: true,
        token: 'ABC',
    },
    {
        id: 'Fher',
        autenticado: true,
        token: 'ABC123',
    },
];

const state$ = from( user ).pipe(
    // ! OJO
    // Debemos especificar que el scan devuelve un usuario también, sino nos 
    // devuelve un fallo
    scan<Usuario, Usuario>( (acc, cur) => {
        return { ...acc, ...cur}
    }, {edad: 33} )
);

// comprobamos los cambios de estado y sólo mostramos el id del usuario
const id$ = state$.pipe(
    map( state => state.id )
    // * Necesitaríamos aplicar otro operador para que sólo nos devuelva una vez 
    // * el usuario. Pero ya lo veremos más adelante
);

id$.subscribe(console.log);