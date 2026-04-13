import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { StatusImgPipe } from './pipes/status-img.pipes';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    StatusImgPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
