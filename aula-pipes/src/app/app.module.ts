import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipes';
import { TruncatePipe } from './pipes/truncate.pipes';
import { PipeDataComponent } from './pipe-data/pipe-data.component';

import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PipeDecimalComponent } from './pipe-decimal/pipe-decimal.component';
import { PipeCurrencyComponent } from './pipe-currency/pipe-currency.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe,
    PipeDataComponent,
    PipeDecimalComponent,
    PipeCurrencyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { 
      provide: DATE_PIPE_DEFAULT_OPTIONS, 
      useValue: 
      { 
        dateFormat: 'dd/MM/yyyy HH:mm:ss',
        timezone: '+0000' 
      } 
    },
    {      
      provide: LOCALE_ID,
      useValue: 'pt-BR' 
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
