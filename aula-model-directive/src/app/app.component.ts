import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // nome: string = 'Angular';

  // onChange(value: string) {
  //   console.log('Valor alterado:', value);

  //   this.nome = value;
  // }

  // show(){
  //   console.log('Valor atual:', this.nome);
  // }

  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log('Valor do input:', this.inputElFormControl);
    console.log('Valor do input original:', this.inputEl);
  }

  send(){
    if(this.inputElFormControl.valid && this.inputElFormControl.touched){
      console.log('Formulário válido e tocado');
    }
  }
}
