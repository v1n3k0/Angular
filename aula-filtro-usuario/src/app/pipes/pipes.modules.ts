import { NgModule } from "@angular/core";

import { PhonePipe } from "./phone.pipe";
import { StatusPipe } from "./status.pipe";
import { AddressPipe } from "./address.pipe";
import { DashIfEmptyPipe } from "./dash-if-empty.pipe";

@NgModule({
  declarations: [
    PhonePipe,
    StatusPipe,
    AddressPipe,
    DashIfEmptyPipe,
  ],
  exports: [
    PhonePipe,
    StatusPipe,
    AddressPipe,
    DashIfEmptyPipe,
  ],
})
export class PipesModule {}