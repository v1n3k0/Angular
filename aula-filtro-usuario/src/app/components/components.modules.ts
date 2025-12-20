import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AngularMaterialModules } from "../angular-material/angular-material.modules";

import { FilterComponent } from "./filter/filter.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

@NgModule({
  declarations: [
    FilterComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    AngularMaterialModules,
    FormsModule,
    CommonModule
  ],
  exports: [
    FilterComponent,
    UserListComponent,
    UserDetailsComponent,
  ]
})
export class ComponentsModules { }