import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterTableRoutingModule } from './register-table-routing.module';
import { RegisterTableComponent } from './register-table.component';


@NgModule({
  declarations: [
    RegisterTableComponent
  ],
  imports: [
    CommonModule,
    RegisterTableRoutingModule
  ]
})
export class RegisterTableModule { }
