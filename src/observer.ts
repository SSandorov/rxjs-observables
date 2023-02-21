import { Observer } from "rxjs";


export const observer: Observer<any> = {
    next: val => console.log('next: ', val),
    error: error => console.log('error:', error),
    complete: () => console.log('complete'),
}