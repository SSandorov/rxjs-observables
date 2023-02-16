/*
El of es una función que nos permite crear observables en base a un listado de elementos

El of emite los valores del listado de uno en uno de manera síncrona
*/

import { of, Observer } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);

// * Tip
// Si mandamos este arreglo, es sólo un arreglo y nos lo devuleve directamente
// const obs$ = of([1, 2, 3, 4, 5, 6]);

// Si quisiésemos mandar un solo arreglo, pero recibir cada elemento del mismo,
// debemos emplear el operador spread  
// const obs$ = of(...[1, 2, 3, 4, 5, 6]);

// Este observable es de tipo any, ya que recibe en el listado todo tipo de valores
const obs$ = of<any>([1, 2], {a: 1, b:2}, () => {}, Promise.resolve(true));

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => null,
    complete: () => console.info('completado')
}

// Como podemos comprobar, al ver en consola que se ejecuta de manera secuencial,
// quiere decir que la función of es un Observable síncrono.
// si fuese asíncrono, primero se ejecutarían los dos console log, y luego el observable
console.log('Inicio del Obs$');
obs$.subscribe(observer);
console.log('Fin del Obs$');
