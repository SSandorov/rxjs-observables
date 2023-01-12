import { Observable, Observer } from 'rxjs';

// Esta es una manera alternativa de hacer el subscribe(). Ya definimos con
// anterioridad las funciones opcionales del subscribe()
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
}

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

    // Forzamos un error
    // const a = undefined;
    // a.nombre = 'Fernando';

    // para dejar de emitir 
    subs.complete();

    // ya ningún suscriptor podrá recibir esta emisión
    subs.next('Hola');
    subs.next('Mundo');
});

// Para que el observable se ejecute debe tener una suscripción
// obs$.subscribe( 
//     // Dentro del subscribe tenemos 3 argumentos opcionales
//     // 1. el next que nos devuelve la emisión del Observable
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
//  );

// Empleando el observer
obs$.subscribe(observer);






