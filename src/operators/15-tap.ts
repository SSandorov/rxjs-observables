/* 
* Operador Tap

Es un operador que se utiliza para emitir un elemento adjunto a la emisión del
observable

Este operador no puede devolver ningún valor

Es muy útil para depurar, ya que podemos poner un tap entre cada operador
para ver como se transforma o filtra el flujo de datos
*/

import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => {
        console.log('tap 1', x);
        // No devuelve nada como podemos comprobar
        return 100;
    }),
    map(val => val * 10),
    tap(x => console.log('tap 2', x))
)
.subscribe(val => console.log('subs', val));