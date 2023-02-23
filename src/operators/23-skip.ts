/* 
* Operador Skip

Permite saltar u omitir cierto número de emisiones
*/

import { interval, fromEvent } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';
import { observer } from "../observer";

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

const clickBtn$ = fromEvent(boton, 'click').pipe(
    // con un skip en este caso concreto, debemos hacer click una segunda vez en el
    // botón para que se ejecute el takeUntil, ya que omite el primer click
    tap(() => console.log('tap antes del skip')),
    skip(1),
    tap(() => console.log('tap después del skip')),
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe(observer);
