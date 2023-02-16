// Ejemplos con of y from
import { of, from, Observer } from "rxjs";

/*
La función from() funciona igual que la función of() añadiendo el operador spread
of(..[1, 2, 3, 4]) === from([1, 2, 3, 4])

Lo bueno de la función from() es que nos crea un observable de casi cualquier cosa
*/

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => null,
    complete: () => console.log('complete'),
}

const url: string = 'https://api.github.com/users/klerith';

// Almacenamos la petición en esta variable
const source$ = from( fetch(url) );

// Sacamos los elementos de la petición que queremos usando el async / await en lugar
// del fetch
source$.subscribe(async(resp) => {
    const dataResp = await resp.json();
    console.log(dataResp);
});

/*
* Peticiones usando AJAX
RxJS tiene su propia forma de hacer las peticiones empleando las peticiones AJAX
*/

/*
* Funciones generadoras o iterables
Es un objeto que nos permite obtener sus valores de manera secuencial
*/
// el * nos dice que es una función generadora
const miGenerador = function*() {
    // el yield nos emite valores
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();
from(miIterable).subscribe( observer );