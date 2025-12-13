import { Component } from '@angular/core';
import { CardButtonCancelComponent } from "../card-button-cancel/card-button-cancel.component";
import { CardButtonComponent } from '../card-button/card-button.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CardButtonCancelComponent, CardButtonComponent]
})
export class CardComponent {
 plano = {
  infos:{
    tipo: 'Simples',
    preco: 100
  }
 }
}
