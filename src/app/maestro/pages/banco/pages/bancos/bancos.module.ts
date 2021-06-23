import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancosRoutingModule } from './bancos-routing.module';

import { BancosComponent } from './components/bancos.component';
import { BancoListadoComponent } from './pages/banco-listado/banco-listado.component';
import { BancoDetalleComponent } from './pages/banco-detalle/banco-detalle.component';


@NgModule({
  declarations: [
    BancosComponent,
    BancoListadoComponent,
    BancoDetalleComponent
  ],
  imports: [
    CommonModule,
    BancosRoutingModule
  ]
})
export class BancosModule { }
