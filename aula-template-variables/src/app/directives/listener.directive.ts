import { Directive, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  @HostListener('click') onClick() {
    console.log('Elemento clicado!');
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    // console.log('Tecla pressionada!', event);

    const textFull = (event.target as HTMLInputElement).value;
    console.log('Texto completo:', textFull);
  }
}