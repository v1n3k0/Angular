import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipes';
import { TruncatePipe } from './pipes/truncate.pipes';
import { PipeDataComponent } from './pipe-data/pipe-data.component';

import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe,
    PipeDataComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
