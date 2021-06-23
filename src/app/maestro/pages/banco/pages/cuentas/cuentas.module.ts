import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentasComponent } from './components/cuentas.component';

import { CuentaListadoComponent } from './pages/cuenta-listado/cuenta-listado.component';
import { CuentaNuevoComponent } from './pages/cuenta-nuevo/cuenta-nuevo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CuentasComponent,
    CuentaListadoComponent,
    CuentaNuevoComponent
  ],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CuentasModule { }
