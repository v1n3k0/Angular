import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [
        ButtonComponent,
        CardComponent
    ],
    imports: [],
    exports: [CardComponent, ButtonComponent]
})
export class ComponentsModule { }