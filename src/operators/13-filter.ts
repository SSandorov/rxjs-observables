/* 
* Operador filter
Nos sirve para filtrar las emisiones de los valores emitidos por el observable
Si se cumple la condición lo emite, y sino pues no pasa el filtro y no es emitido
*/

import { from } from "rxjs";
import { filter } from "rxjs/operators";

// range(20, 30).pipe(
//     filter( 
//         (val, i) => {
//             console.log('index ', i)
//             return val % 2 === 1;
//         })
// )// .subscribe( console.log )

/* 
* Tip: Emplear una interfaz para que el tipado del observable sea el correcto
Es importante el uso de interfaces para que el observable sepa que tipo de datos
va a manejar
*/
interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

const personajes$ = from(personajes).pipe(
    filter((val) => {
        return val.tipo === 'heroe';
    })
).subscribe(console.log);

