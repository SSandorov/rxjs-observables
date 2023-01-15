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

    setTimeout(() => {
        // Es importante ver la diferencia entre el unsubscribe() y el complete
        /*
           Cuando ejecutamos el .complete() inmediatamente después recibimos
           el return de la función, ya que se termina la emisión del observable
           
           Mientras que el unsubscribe() es independiente a la cancelación
           de la emisión, ya que las variables suscritas al observable pueden
           seguir estando pendientes del Observable aunque este esté completado
        */
        subs.complete();
    }, 2500);

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

// Método actual para la suscripción en cadena, ya no sirve hacerla así
// subs1.add(subs2).add(subs3);
subs1.add(subs2);
subs2.add(subs3);

// Si queremos cancelar una suscripción en un intervalo de tiempo, podríamos
// hacerlo de esta manera, sin embargo, el Observable se seguiría ejecutando
// porque solo hemos cancelado la suscripción de una variable
// Para terminar de ejecutar el observable debemos añadir un return a la función
// del observable
setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Completado el timeOut');
}, 3000);