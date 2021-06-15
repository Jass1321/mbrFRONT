import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentasComponent } from './components/cuentas.component';

import { CuentaBusquedaComponent } from './pages/cuenta-busqueda/cuenta-busqueda.component';
import { CuentaDetalleComponent } from './pages/cuenta-detalle/cuenta-detalle.component';
import { CuentaEditadoComponent } from './pages/cuenta-editado/cuenta-editado.component';
import { CuentaListadoComponent } from './pages/cuenta-listado/cuenta-listado.component';
import { CuentaNuevoComponent } from './pages/cuenta-nuevo/cuenta-nuevo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CuentasComponent,
    CuentaBusquedaComponent,
    CuentaDetalleComponent,
    CuentaEditadoComponent,
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
