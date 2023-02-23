import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskCpfModule } from './input-mask-cpf/input-mask-cpf.module';
import { InputMaskDataNascimentoModule } from './input-mask-data-nascimento/input-mask-data-nascimento.module';
import { InputMaskLoginModule } from './input-mask-login/input-mask-login.module';
import { InputMaskNomeCompletoModule } from './input-mask-nome-completo/input-mask-nome-completo.module';
import { InputMaskPasswordModule } from './input-mask-password/input-mask-password.module';
import { InputMaskTelefoneModule } from './input-mask-telefone/input-mask-telefone.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputMaskCpfModule,
    InputMaskDataNascimentoModule,
    InputMaskLoginModule,
    InputMaskNomeCompletoModule,
    InputMaskPasswordModule,
    InputMaskTelefoneModule
  ],
  exports: [
    InputMaskCpfModule,
    InputMaskDataNascimentoModule,
    InputMaskLoginModule,
    InputMaskNomeCompletoModule,
    InputMaskPasswordModule,
    InputMaskTelefoneModule
  ],
})
export class InputsModule {}
