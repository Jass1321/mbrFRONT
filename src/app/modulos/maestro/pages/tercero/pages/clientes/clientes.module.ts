import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './components/clientes.component';

import { ClienteBusquedaComponent } from './pages/cliente-busqueda/cliente-busqueda.component';
import { ClienteDetalleComponent } from './pages/cliente-detalle/cliente-detalle.component';
import { ClienteEditadoComponent } from './pages/cliente-editado/cliente-editado.component';
import { ClienteListadoComponent } from './pages/cliente-listado/cliente-listado.component';
import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteBusquedaComponent,
    ClienteDetalleComponent,
    ClienteEditadoComponent,
    ClienteListadoComponent,
    ClienteNuevoComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
