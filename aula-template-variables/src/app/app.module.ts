import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './filho/filho.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisableDirective } from './directives/disable.directive';
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HighlightDirective,
    DisableDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirective
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
