import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskTelefoneComponent } from './input-mask-telefone.component';



@NgModule({
  declarations: [InputMaskTelefoneComponent],
  imports: [
    CommonModule
  ],
  exports:[InputMaskTelefoneComponent]
})
export class InputMaskTelefoneModule { }
