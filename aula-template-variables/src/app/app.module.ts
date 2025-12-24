import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './filho/filho.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    SemDiretivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
