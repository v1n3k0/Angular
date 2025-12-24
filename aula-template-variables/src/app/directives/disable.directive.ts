import { Directive, Host, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective {
  // @HostBinding('attr.disabled') isDisabled = true;
  @HostBinding('disabled') propDisabled = false;
}
