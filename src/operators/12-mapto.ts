/*
* Operador mapTo

El MapTo sirve para tomar una emisión del observable y transformarla en lo que tu 
quieras, básicamente una constante.

Por ejemplo, imaginate que un posteo HTTP se ejecute correctamente pero la respuesta 
cambió eventualmente en el backend, y esto está rompiendo tu código en el front-end, 
entonces usas el mapTo, emites la respuesta que necesitas y resuelves el problema 
con un simple operador.

*/

/*
* Tip: Leer el tipado genérico en la documentación
Cuando vemos como tipos algo como: <T, R> nos está indicando que son tipos 
genéricos de datos que son recibidos y emetidos en el operador en este caso, 
pero podría ser en cualquier otro elemento.

Lo ponen para que podamos entender si hay alguna diferencia entre los datos que 
son recibidos y/o emitidos por esa función, método, operador, ... 
*/
import { fromEvent } from "rxjs";
import { mapTo } from 'rxjs/operators'


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpMapTo$ = keyUp$.pipe(
    // Nos devuelve el mismo elemento constantemente
    mapTo('tecla presionada')
);

keyUpMapTo$.subscribe(code => console.log('mapTo: ', code));