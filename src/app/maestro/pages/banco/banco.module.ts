import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoRoutingModule } from './banco-routing.module';
import { BancoComponent } from './components/banco.component';



@NgModule({
  declarations: [
    BancoComponent,
  ],
  imports: [
    CommonModule,
    BancoRoutingModule
  ]
})
export class BancoModule { }
