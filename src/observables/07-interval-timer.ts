/*
Las funciones interval y timer nos permiten trabajar con intervalos de tiempo
Son funciones asíncronas por naturaleza

* Interval
En este caso el intervalo recibe de argumento en milisegundos el tiempo en el 
que debe hacer una emisión. Cada emisión nos devuelve un número en orden a partir
del cero hasta el infinito. No se completa por si mismo, sino debemos utilizar
operadores para completarlo

* Timer
El timer recibe como argumento los milisegundos para emitir un valor y se completa
después de emitirlo

En caso de poner un segundo argumento, se convierte en un interval que comienza
cuando el primer argumento lo diga, y con la secuencia de tiempo que el segundo
argumento diga; por lo que nunca llega a completarse por su propia cuenta

También peude recibir como argumento una instancia de la clase Date
*/
import { interval, timer, Observer } from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log('next', valor),
    error: error => null,
    complete: () => console.log('complete'),
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// const interval$ = interval(5000);
// const timer$ = timer(3000, 1000);
const timer$ = timer(hoyEn5);

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');