import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import { InputMaskCpfModule } from 'src/app/shared/inputs/input-mask-cpf/input-mask-cpf.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    PasswordModule,
    InputMaskModule,
    InputMaskCpfModule,
    
    
  ],
})
export class LoginModule {}
