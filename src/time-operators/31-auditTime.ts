/* 
* Operador auditTime

Cuando el observable emite un valor, el operador auditTime espera un tiempo determinado y mando la 
última emisión en ese intervalo de tiempo.
En caso de que se complete el observable en medio de in intervalo de espera, no mandará ningún valor
emitido.
*/

import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";
import { observer } from "../observer";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map( ({ x, y }) => ( {x, y} ) ),
    tap(val => console.log('tap', val)),
    auditTime(3000)
)
.subscribe(observer);