import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';

import { DepartamentoDetalleComponent } from './pages/departamento-detalle/departamento-detalle.component';
import { DepartamentoListadoComponent } from './pages/departamento-listado/departamento-listado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialMaestroModule } from '../../../../plus/material.maestro.module';
import { DepartamentoComponent } from '../departamentos/components/departamento.component';

@NgModule({
  declarations: [
    DepartamentoComponent,
    DepartamentoDetalleComponent,
    DepartamentoListadoComponent,
   
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMaestroModule,
  ]
})
export class DepartamentosModule { }
