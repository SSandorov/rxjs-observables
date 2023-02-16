/*
La función range nos crea un Observable que emite una secuencia de números en base a un
rango de manera síncrona.

Puede ser modificada a asíncrona empleando el async scheduler

El rango no es un rango del primer argumento al segundo
sino que el segundo argumento es el número de emisiones siguiendo un incremento
sequencial del primer argumento

Si no especificamos el segundo argumento, nos crea un rango a partir de 0

Lo podemos comprobar con:
const src$ = range(-5, 10);
Nos hace un incremento hasta 4, no hasta 5.
*/
import { of, range, asyncScheduler, observeOn } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);

// Este es el método que Fernando nos enseñó para convertir el Observable en 
// asíncrono
// const src$ = range(1, 5, asyncScheduler);
// Hoy en día hay que pasar el rango por un pipe para poder hacerlo
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');