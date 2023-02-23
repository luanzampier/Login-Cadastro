import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskLoginComponent } from './input-mask-login.component';



@NgModule({
  declarations: [InputMaskLoginComponent],
  imports: [
    CommonModule
  ],
  exports:[InputMaskLoginComponent]
})
export class InputMaskLoginModule { }
