import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  
  private _planType: string = '';

  @Input('planType') 
  set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  get planType(): string {
    return this._planType;
  }

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted);
    
    // console.log('planType', this.planType); //GET
    // this.planType = 'Teste' //SET
  }
}
