/* 
* Cadena de operadores
Podemos aplicar varios pipes operadores dentro de un mismo observable.
Lo podemos hacer de dos maneras:
    - Abrimos un método pipe y los ponemos todos
    - Un método pipe por cada operador
Se suele emplear un solo pipe y todos los operadores dentro del mismo

También es importante saber el orden que se pone dentro del pipe, ya que
aplicará cada operador de forma secuencial
*/
import { fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // recibe un keyboard event y emite un string
    filter(key => key === 'Enter') // recibe un string y emite un string 
);

keyUp$.subscribe(console.log);