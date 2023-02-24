/* 
* Operador sampleTime

Nos devuelve el último valor emitido en un intervalo de tiempo
*/

import { fromEvent } from "rxjs";
import { map, sampleTime } from 'rxjs/operators';
import { observer } from "../observer";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    // ! IMPORTANTE
    // Si ponemos el sampleTime después de la transformación consume más memoria, ya que tiene que procesar
    // los datos y crear un objeto con cada click. Por tanto, es mejor poner el operador de tiempo antes,
    // para que si sólo lo haga una vez
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y }) ),
)
.subscribe(observer);