import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(intervalID);
        // Al completar la emisión del Subject, la emisión del Observable
        // se sigue ejecutando, por lo que debemos completar tanto uno 
        // como otro sino queremos estar consumiendo un exceso de memoria
        // Para completar el Observable, debemos hacer el unsubscribe() de
        // la suscripción de este Observable con el Subject como argumento
        // la siguiente línea de código
        // const intervalSubject = intervalo$.subscribe(subject$);

        // esto lo comprobamos ejecutando el código y viendo que no se ejecuta
        // este código en pantalla, ya que sólo hemos completado el Subject, no
        // el Observable
        console.log('Intervalo Completado');
    } 
});

// Cada suscripción nos devuelve un número distinto
// const subs1 = intervalo$.subscribe(random => console.log('subs1: ', random));
// const subs2 = intervalo$.subscribe(random => console.log('subs2: ', random));
// En caso de necesitar que ambos suscriptores mostrasen el mismo número,
// tendríamos que hacer lo siguiente
/*
    Empleamos el Subject, el cual tiene las siguientes características
    1. Emisión múltiple: todos los suscriptores recibirán la misma información
    del Subject
    2. También podemos emplear el Observer como en el Observable, para añadir
    valores predefinidos a la suscripción de variables, o en este caso en concreto,
    como argumento del Observable para que todos los suscriptores reciban
    la misma emisión de valores
    3. Tiene también el next, error y complete
*/
const subject$ = new Subject();
// añadimos el subject$ como Observer
const intervalSubject = intervalo$.subscribe(subject$);
// Y ahora ambas suscripciones recibirán el mismo valor del Observable cuando
// llamemos al Subject
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


/*
Al ser un Observer, también tiene el next, error y complete. Esto nos permite
introducir datos desde fuera del Observable e interactuar con el flujo de 
datos establecido como podemos observar en el setTimeout()
*/
/*
IMPORTANTE
Cuando los datos son producidos dentro del Observable, se le denomina un
'Cold Observable' y cuando los datos son producidos fuera del mismo se le 
denomina 'Hot Observable'.
Por lo tanto, un Subject nos tranforma un Cold Observable en un Hot Observable
*/
setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    // de esta manera aplicamos el complete() al Observable
    intervalSubject.unsubscribe();
}, 3500);