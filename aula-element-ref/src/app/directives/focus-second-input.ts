import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
  standalone: false,
})
export class FocusSecondInput implements AfterViewInit {
  // @HostBinding('style.backgroundColor') backgroundColor = 'lightyellow';
  // @HostBinding('textContent') textContent = 'Directive applied: Focus on second input';

  constructor(private _elRef: ElementRef) { }
  
  ngAfterViewInit(): void {
        console.log(this._elRef);

    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    if (inputList.length > 1) {
      inputList[1].focus();
    }
    console.log(inputList);
  }
}
