/* 
* Ejercicio de progress bar
Creamos una barra que se irá completando a medida que hagamos scroll en la página.

Empieza en 0% y acaba en el 100% de la página
*/

import { fromEvent } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus, turpis nec hendrerit sollicitudin, risus sapien dictum metus, eget vehicula nisl arcu vitae lorem. Ut semper ullamcorper tellus sit amet congue. Sed feugiat eros sit amet urna euismod condimentum. Nam semper felis quis ligula tincidunt, non maximus erat viverra. Sed vitae volutpat mi. Integer vel sapien nec risus sollicitudin eleifend. Suspendisse pulvinar sem erat, eget accumsan est dapibus ut. Integer dictum semper risus, sed molestie augue dignissim id. Quisque vitae enim accumsan, suscipit ante ut, ornare elit. Fusce tortor metus, commodo vel aliquam dapibus, mollis eu nisl. Mauris ut nisi placerat, imperdiet odio non, sodales velit. Ut aliquam lobortis fermentum. Proin finibus purus id ipsum molestie, ac faucibus diam ultrices. Etiam varius risus mollis ante fermentum fermentum. Donec eget nisl nec neque fringilla facilisis.
<br/><br/>
Aliquam ac enim sed lorem tempor sodales. Curabitur non neque malesuada, facilisis erat et, molestie augue. Quisque vitae congue elit. In hac habitasse platea dictumst. Nulla sodales lectus nisi, in hendrerit sem vestibulum sed. Duis ornare faucibus risus, vitae porttitor ligula volutpat non. Sed vitae purus porttitor ligula ullamcorper cursus. Morbi dictum urna sed laoreet sollicitudin. Curabitur pulvinar, elit vitae cursus pellentesque, ex dui fringilla turpis, vitae luctus ipsum risus in lectus. Sed maximus ante varius, tempor mi et, rhoncus sem. Quisque ac tortor viverra, consequat quam sed, tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/><br/>
Curabitur placerat luctus tellus. Cras porttitor ac lectus et mollis. Nulla facilisi. In eu sapien finibus, lobortis elit quis, pretium massa. Etiam vitae malesuada augue. Proin et dapibus lacus, ac faucibus nulla. Donec efficitur dui metus, a accumsan magna tempor a. Cras vel cursus magna. Suspendisse feugiat sapien in ipsum fermentum, ut elementum velit interdum.
<br/><br/>
Ut lobortis congue egestas. Mauris efficitur nec lectus ac ultricies. Nulla ullamcorper non diam quis semper. Pellentesque congue velit et neque venenatis vulputate. Aliquam vitae condimentum ante, sit amet vehicula magna. Nam sit amet eros ac augue aliquam consequat sed eu ligula. Morbi a mi sollicitudin, pellentesque libero vitae, ultricies augue. Suspendisse sed nulla id lacus suscipit semper. Proin volutpat blandit risus in dignissim. Cras mauris libero, consectetur accumsan ligula vel, suscipit laoreet ante. Suspendisse nisi dui, venenatis non dapibus sit amet, cursus ac nunc. Curabitur sit amet convallis magna.
<br/><br/>
Maecenas faucibus purus eu dignissim suscipit. Vestibulum rhoncus gravida risus, at elementum velit mattis eget. Donec semper molestie tristique. Nulla a auctor enim, a maximus nunc. Ut finibus convallis sapien vel imperdiet. Morbi id lobortis nulla. Suspendisse sagittis erat mauris, egestas bibendum ante luctus sed. Curabitur aliquam pulvinar imperdiet. Quisque ac facilisis velit. Aenean facilisis neque nec urna bibendum, id convallis enim condimentum. Fusce pretium, justo sed aliquam tincidunt, orci ligula pulvinar ipsum, luctus sollicitudin ante odio ac risus. Duis molestie sem vel placerat efficitur. 
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Función que haga el cálculo

// Flujo de datos
// const scroll$ = fromEvent