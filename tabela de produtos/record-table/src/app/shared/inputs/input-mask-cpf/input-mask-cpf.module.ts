import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskCpfComponent } from './input-mask-cpf.component';
import {InputMaskModule} from 'primeng/inputmask';



@NgModule({
  declarations: [InputMaskCpfComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  exports:[InputMaskCpfComponent]
})
export class InputMaskCpfModule { }
