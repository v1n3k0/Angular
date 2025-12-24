import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  // @HostBinding('attr.style') attrStyle = 'background-color: blue; color: white;';
  // @HostBinding('style') style = 'background-color: blue; color: white;';
  @HostBinding('style') style = {
    'background-color': 'orange',
    'color': 'white'
  };
}
