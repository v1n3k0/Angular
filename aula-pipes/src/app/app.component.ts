import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pessoa = {
    nome: 'João',
    idade: 30,
    dataNascimento: new Date(1994, 5, 15)
  }
}
