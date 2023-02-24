/* 
* Operador sample

Manda el último valor emitido por el observable cuando el observable que tiene como argumento emita
un valor, y así sucesivamente
*/

import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";
import { observer } from '../observer';

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
)
.subscribe(observer)