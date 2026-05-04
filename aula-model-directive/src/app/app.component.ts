import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome: string = 'Angular';

  onChange(value: string) {
    console.log('Valor alterado:', value);

    this.nome = value;
  }

  show(){
    console.log('Valor atual:', this.nome);
  }
}
