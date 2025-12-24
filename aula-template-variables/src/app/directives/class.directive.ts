import { Directive, Host, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
// @HostBinding('attr.class') elementClass = 'meu-texto';
// @HostBinding('className') elementClass = 'meu-texto meu-size';
  @HostBinding('class') elementClass = {
    'meu-texto': true,
    'meu-size': true
  };
}
