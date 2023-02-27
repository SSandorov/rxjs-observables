/* 
* Peticiones Post, Put y Delete con AJAX
*/

import { ajax } from "rxjs/ajax";
import { observer } from "../observer";

const url = 'https://httpbin.org/delay/1';

// * Manera simple de manejar cada petición por separado
// ajax.post( url, {
//     id: 1,
//     nombre: 'Nombre'
// },
// {
//     'mi-token': 'ABC123'
// } ).subscribe(observer);

// ajax.put( url, {
//     id: 1,
//     nombre: 'Nombre'
// },
// {
//     'mi-token': 'ABC123'
// } ).subscribe(observer);

// ajax.delete( url, 
// {
//     'mi-token': 'ABC123'
// } ).subscribe(observer);

//  * Con esta manera podríamos especificar con una variable que tipo de petición queremos hacer,
// * es más eleborado, pero escribimos una vez el código y sólo tenemos que cambiar la variable del
// * method dependiendo de la petición

// ! Esta forma de petición también nos devuelve el DELETE con el body, y hay que gestionarlo en el backend
ajax({
    url: url,
    method: 'PUT',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Nombre'
    }
}).subscribe(observer);