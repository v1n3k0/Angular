import { NgModule } from "@angular/core";

import { PhonePipe } from "./phone.pipe";
import { StatusPipe } from "./status.pipe";
import { AddressPipe } from "./address.pipe";

@NgModule({
  declarations: [
    PhonePipe,
    StatusPipe,
    AddressPipe
  ],
  exports: [
    PhonePipe,
    StatusPipe,
    AddressPipe
  ],
})
export class PipesModule {}