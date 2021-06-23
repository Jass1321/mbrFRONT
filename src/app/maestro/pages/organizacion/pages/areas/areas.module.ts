import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreaComponent } from './components/area.component';

import { AreaListadoComponent } from './pages/area-listado/area-listado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialMaestroModule } from '../../../../plus/material.maestro.module';


@NgModule({
  declarations: [
    AreaComponent,
    AreaListadoComponent,
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMaestroModule
  ]
})
export class AreasModule { }
