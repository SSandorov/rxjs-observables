/*
* AsyncScheduler

A diferencia de las funciones que hemos visto, no es un Obersvable, sino que es un
Subscriber

Con el asyncScheduler seremos capaces de crear las funciones:
    - setTimeout(() => {}, 3000);
    - setInterval(() => {}, 3000);
dichas funciones las empleamos a la hora de aprender a manejar los observables, 
las suscripciones y los subject

Por lo tanto, la utilidad del asyncScheduler es la de generar un observable que es
síncrono en uno asíncrono, así como cualquier función que requiera ser asíncrona
*/
import { asyncScheduler } from "rxjs";

const saludar = () => console.log('Hola Mundo');
// const saludar2 = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);

/* el schedule recibe como argumentos:
    1. Una función sin los paréntesis, ya que no queremos ejecutarla inmediatamente
    2. El tiempo que queremos esperar para ejecutar la función
    3. Mandamos un objeto que será ejecutado en la función. Debe ser un objeto
    porque sólo puede recibir un elemento como argumento, así que podemos definir
    tod os los elementos necesarios y añadirlos al objeto
*/

// const obj = {
//     nombre: 'Stefan',
//     apellido: 'Sandorov'
// }

console.log('inicio');

// * Con los siguientes elementos configuramos un setTimeOut
// asyncScheduler.schedule(saludar, 3000);
// asyncScheduler.schedule(saludar2, 3000, obj);

// * Con los siguientes configuramos un setInterval
/*
! OJO
Para poder definir un asyncScheduler para que funcione como un setInterval no podemos
emplear la función de flecha, sino que debemos definir una función normal 
Lo tenemos que hacer porque debemos ejecutar otra función asíncrona para cambiar el
estado de la función, así podemos generar un intervalo. Y para ello tenemos que emplear
la definición de función estándar, que acepta esta llamada.
*/
const subs = asyncScheduler.schedule(function(state) {
    console.log('state', state);
    // * solo puede ser ejecutado con la función estándar
    this.schedule(state + 1, 1000);
}, 3000, 0);

console.log('fin');

// Para completar el intervalo, podemos definir otro asyncScheduler que funcione como
// un setTimeout

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);