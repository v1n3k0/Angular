import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObsComObjComponent } from './components/obs-com-obj/obs-com-obj.component';
import { HttpClientModule } from '@angular/common/http';
import { ObsComArrayComponent } from './components/obs-com-array/obs-com-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsComObjComponent,
    ObsComArrayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
