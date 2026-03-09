import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipes';
import { TruncatePipe } from './pipes/truncate.pipes';

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
