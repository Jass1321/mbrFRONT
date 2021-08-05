import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanzasRoutingModule } from './finanzas-routing.module';
import { FinanzasComponent } from './components/finanzas/finanzas.component';


@NgModule({
  declarations: [
    FinanzasComponent
  ],
  imports: [
    CommonModule,
    FinanzasRoutingModule
  ]
})
export class FinanzasModule { }
