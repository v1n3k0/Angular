import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonTitle = 'Clique aqui';
  buttonDisabled = true;

  OnButtonClick() {
    this.buttonTitle = 'Obrigado por clicar';
    this.buttonDisabled = !this.buttonDisabled;
  }
}
