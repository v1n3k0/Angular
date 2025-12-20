import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule
    ]
})
export class AngularMaterialModules { }