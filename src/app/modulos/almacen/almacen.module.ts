import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenRoutingModule } from './almacen-routing.module';
import { AlmacenComponent } from './components/almacen/almacen.component';


@NgModule({
  declarations: [
    AlmacenComponent
  ],
  imports: [
    CommonModule,
    AlmacenRoutingModule
  ]
})
export class AlmacenModule { }
