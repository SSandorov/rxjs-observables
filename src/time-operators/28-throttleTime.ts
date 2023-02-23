/* 
* Operador throttleTime

Es un operador similar al debounceTime. La diferencia es que una vez emitido el valor
y mandado, el operador no va a permitir pasar más emisiones hasta que el tiempo 
especificado pase. Y al igual que el debouncTime, descartará todas las emisiones 
hasta que no pase el tiempo.

Añadiendo más argumentos podemos especificar que mande emisiones anteriores o 
posteriores
*/

import { asyncScheduler, fromEvent } from "rxjs";
import { map, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { observer } from "../observer";

// Ejemplo 1
// const click$ = fromEvent<PointerEvent>( document, 'click' ).pipe(
//     throttleTime(3000)
// )
// .subscribe(observer);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    // * Usos del throttleTime
    // Cuando queramos que se pongan sugerencias en un buscador dentro de la página
    // empelamos el throttle con un asynchScheduler y entonces especificamos un
    // objeto que decide si muestra la primera y última emisión 
    throttleTime(5000, asyncScheduler, {
        // poniendo el leading en false funciona muy parecido al debounceTime, y puede
        // servirnos muy bien para los buscadores
        leading: true,
        trailing: true
    }),
    // * TIP
    // esta es una manera de acceder al value ya que el pluck se va a deprecar
    map(e => (e.target as HTMLInputElement).value ),
    distinctUntilChanged()
)
.subscribe(observer);