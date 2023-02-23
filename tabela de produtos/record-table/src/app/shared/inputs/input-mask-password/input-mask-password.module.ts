import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskPasswordComponent } from './input-mask-password.component';



@NgModule({
  declarations: [InputMaskPasswordComponent],
  imports: [
    CommonModule
  ],
  exports:[InputMaskPasswordComponent]
})
export class InputMaskPasswordModule { }
