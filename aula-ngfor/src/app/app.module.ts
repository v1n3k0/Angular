import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { StatusClassPipe } from './pipes/status-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StatusClassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
