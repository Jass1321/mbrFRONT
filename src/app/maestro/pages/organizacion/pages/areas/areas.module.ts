import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './components/areas.component';

import { AreaBusquedaComponent } from './pages/area-busqueda/area-busqueda.component';
import { AreaDetalleComponent } from './pages/area-detalle/area-detalle.component';
import { AreaEditadoComponent } from './pages/area-editado/area-editado.component';
import { AreaListadoComponent } from './pages/area-listado/area-listado.component';
import { AreaNuevoComponent } from './pages/area-nuevo/area-nuevo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AreasComponent,
    AreaBusquedaComponent,
    AreaDetalleComponent,
    AreaEditadoComponent,
    AreaListadoComponent,
    AreaNuevoComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AreasModule { }
