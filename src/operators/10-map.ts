/*
* Operador Map
Es el operador más común y el que más se emplea

Nos permite transformar lo que emite el observable para:
    - Extraer información
    - Tranformarla
    - O converir la información en otra cosa diferente

El operador map puede recibir cualquier tipo de dato, y puede regresar cualquier
otro tipo de dato
*/
import { fromEvent, range } from "rxjs";
import { map } from 'rxjs/operators'

// range(1, 5)
/*
* Método Pipe
Es un método de los observables que nos permite filtrar o modificar el stream
de datos que maneja el observable

Dentro del pipe añadimos los operadores que van a transformar estos datos.

También hay que tener en cuenta que existe un orden en el que estos operadores
se ejecutan, ya que podemos tener varios operadores dentro del mismo observable
*/
// .pipe(
    // * Tipado del map
    // el primer argumento es el tipado de la entrada, y el segundo es el tipado 
    // de la salida
//     map<number, number>( val => {
//         return val * 10;
//     } )
// )
// .subscribe(console.log);

// This way we could access an element of an event and 
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    map(event => event.code)
);

keyUpCode$.subscribe(code => console.log('map code: ', code));