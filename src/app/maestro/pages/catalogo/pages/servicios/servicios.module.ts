import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './components/servicios.component';

import { ServicioBusquedaComponent } from './pages/servicio-busqueda/servicio-busqueda.component';
import { ServicioDetalleComponent } from './pages/servicio-detalle/servicio-detalle.component';
import { ServicioEditadoComponent } from './pages/servicio-editado/servicio-editado.component';
import { ServicioListadoComponent } from './pages/servicio-listado/servicio-listado.component';
import { ServicioNuevoComponent } from './pages/servicio-nuevo/servicio-nuevo.component';

@NgModule({
  declarations: [
    ServiciosComponent,
    ServicioBusquedaComponent,
    ServicioDetalleComponent,
    ServicioEditadoComponent,
    ServicioListadoComponent,
    ServicioNuevoComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
