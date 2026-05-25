import { Component, ViewChild } from '@angular/core';
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

  @ViewChild('meuInputFormControl') inputEl!: NgModel;

  ngAfterViewInit() {
    console.log('Valor do input:', this.inputEl);
  }

  send(){
    if(this.inputEl.valid && this.inputEl.touched){
      console.log('Formulário válido e tocado');
    }
  }
}
