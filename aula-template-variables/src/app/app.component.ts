import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('meuInput') meuInput!: ElementRef<HTMLInputElement>;

  atualizar() {
    this.meuInput.nativeElement.value = 'Valor atualizado!';
  }

  focus() {
    this.meuInput.nativeElement.focus();
  }
}
