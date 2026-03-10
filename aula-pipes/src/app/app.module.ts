import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipes';
import { TruncatePipe } from './pipes/truncate.pipes';
import { PipeDataComponent } from './pipe-data/pipe-data.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
