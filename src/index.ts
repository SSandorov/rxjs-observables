import { Observable } from 'rxjs';

// Es buena práctica poner el símbolo del dólar al final del nombre de la
// variable para saber que es un observable

// este método para crear observables no es empleado
// const obs$ = Observable.create();

// Declaramos el observable como instancia de la clase Observable()
// es importante ponerle tipado al observable
const obs$ = new Observable<string>(subs => {
    // emitimos un valor del observable con el subs.next()
    subs.next('Hola');
    subs.next('Mundo');

    // para dejar de emitir 
    subs.complete();

    // ya ningún suscriptor podrá recibir esta emisión
    subs.next('Hola');
    subs.next('Mundo');
});

// Para que el observable se ejecute debe tener una suscripción
obs$.subscribe( console.log );







