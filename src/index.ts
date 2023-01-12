import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subs => {
    // crear un contador
    let contador: number = 0;

    const interval = setInterval( () => {
        contador += 1;
        subs.next(contador);
        console.log(contador);
    }, 1000 );

    // Con el return podemos cancelar el Observable
    // Pero solo lo hemos empleado como ejemplo, ya que rxjs ya viene 
    // con soluciones más sencillas a este tipo de problemas
    return () => {
        clearInterval(interval);
        console.log('Intervalo terminado');
    }
} );

const subs1 = intervalo$.subscribe( );
const subs2 = intervalo$.subscribe( );
const subs3 = intervalo$.subscribe( );

// Si queremos cancelar una suscripción en un intervalo de tiempo, podríamos
// hacerlo de esta manera, sin embargo, el Observable se seguiría ejecutando
// porque solo hemos cancelado la suscripción de una variable
// Para terminar de ejecutar el observable debemos añadir un return a la función
// del observable
setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Completado el timeOut');
}, 3000);