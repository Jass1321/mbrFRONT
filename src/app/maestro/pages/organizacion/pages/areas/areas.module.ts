import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './components/areas.component';

import { AreaDetalleComponent } from './pages/area-detalle/area-detalle.component';
import { AreaEditadoComponent } from './pages/area-editado/area-editado.component';
import { AreaListadoComponent } from './pages/area-listado/area-listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AreasComponent,
    AreaDetalleComponent,
    AreaEditadoComponent,
    AreaListadoComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AreasModule { }
