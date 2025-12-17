import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  buttonClicked() {
    console.log('Button was clicked!');
  }

  onCardButtonClicked() {
    console.log('Card button was clicked!');
  }
}
