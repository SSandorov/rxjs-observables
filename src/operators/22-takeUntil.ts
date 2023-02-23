/* 
* Operador takeUntil

Recibe como argumento otro observable.

Y funciona de la siguiente manera:
    - Emitirá los valores del primer observable mientras que el segundo no emita.
    En el momento que el segundo emita, el observable se completará y ya no habrá
    más emisiones del primero.
    El segundo observable no emite ningún valor, sólo da la señal para que se complete
    y el primero no emita más valores
*/

import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { observer } from "../observer";

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe(observer);