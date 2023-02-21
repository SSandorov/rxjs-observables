/* 
* Operador takeWhile

El operador permite al observable mandar valores mientras que se cumpla la condición
de su argumento, una vez que no se cumpla la condición el observable se completa

Puesto el segundo argumento en true, nos devuelve el valor de la emisión que no
cumplió la condición
*/

import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";
import { observer } from "../observer";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map( ({ x, y }) => ({x, y}) ),
    // takeWhile( num => num.x <= 200 )
    // el segundo argumento puesto en true nos devuelve el argumento que rompe la 
    // condición
    takeWhile( num => num.x <= 200, true )
)
.subscribe(observer);