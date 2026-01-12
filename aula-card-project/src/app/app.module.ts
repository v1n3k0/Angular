import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
