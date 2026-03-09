import { Component } from '@angular/core';

export enum UserStatusEnum {
  Ativo = 1,
  Inativo = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pessoa = {
    nome: 'João',
    idade: 30,
    status: 10
  }
}
