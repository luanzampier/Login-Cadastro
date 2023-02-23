import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectionCardModule } from './components/redirection-card/redirection-card.module';
import { PrimengModule } from './components/primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule],
  exports: [RedirectionCardModule, PrimengModule],
})
export class SharedModule {}
