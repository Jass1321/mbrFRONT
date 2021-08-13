import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenRoutingModule } from './almacen-routing.module';
import { AlmacenComponent } from './components/almacen/almacen.component';

import { MaterialMaestroModule } from '../maestro/plus/material.maestro.module';
import { NgxBootstrapMaestroModule } from '../maestro/plus/ngx-bootstrap.maestro.module';


@NgModule({
  declarations: [
    AlmacenComponent
  ],
  imports: [
    CommonModule,
    AlmacenRoutingModule,
    MaterialMaestroModule,
    NgxBootstrapMaestroModule
  ]
})
export class AlmacenModule { }
