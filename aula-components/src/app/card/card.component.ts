import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  @Input({ alias: 'planType', transform: (value: string) => handlerPalnType(value) }) planType: string = '';


  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted);

    // console.log('planType', this.planType); //GET
    // this.planType = 'Teste' //SET
  }
}

function handlerPalnType(value: string): string {
  console.log('handlerPalnType', value);
  return value.toUpperCase();
}
