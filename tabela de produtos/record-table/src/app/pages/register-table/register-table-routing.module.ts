import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterTableComponent } from './register-table.component';

const routes: Routes = [{ path: '', component: RegisterTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterTableRoutingModule { }
