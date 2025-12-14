import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent {
 plano = {
  infos:{
    tipo: 'Simples',
    preco: 100
  }
 }
}
