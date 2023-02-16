/*
Nos permite crear observables de un event target
Es la función de RxJS más usada
*/

import { fromEvent, Observer } from 'rxjs';

/*
* Eventos del DOM

* Tip
Para poder acceder al body del evento, debemos ponerle el tipado correcto a la
variable. Para poder comprobar que tipo es, debemos:
    - Poner el tipado genérico <Event>
    - Crear un observable que nos devuelva el next en consola
    - Suscribirse al observable 
    - Comprobar en consola el tipo de evento que fue emitido
*/
const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => null,
    complete: () => console.info('completado')
}

// Comprobamos el tipo con esta suscripción
// src1$.subscribe(observer);

// Podemos emplear la desestructuración en lugar de acceder de manera general
src1$.subscribe(({x, y}) => {
    console.log(x, y);
});
src2$.subscribe(e => {
    console.log(e.key);
});