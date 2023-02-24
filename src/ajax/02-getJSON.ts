/* 
* getJSON
*/

import { ajax } from "rxjs/ajax";
import { observer } from "../observer";

// Es una API para realizar pruebas
const url = 'https://httpbin.org/delay/1';

// El getJson recibe dos argumentos, una url y los headers
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABCD'
});

obs$.subscribe(observer);