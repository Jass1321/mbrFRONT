import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './components/departamentos.component';

import { DepartamentoDetalleComponent } from './pages/departamento-detalle/departamento-detalle.component';
import { DepartamentoEditadoComponent } from './pages/departamento-editado/departamento-editado.component';
import { DepartamentoListadoComponent } from './pages/departamento-listado/departamento-listado.component';
import { DepartamentoNuevoComponent } from './pages/departamento-nuevo/departamento-nuevo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialMaestroModule } from '../../../../plus/material.maestro.module';

@NgModule({
  declarations: [
    DepartamentosComponent,
    DepartamentoDetalleComponent,
    DepartamentoEditadoComponent,
    DepartamentoListadoComponent,
    DepartamentoNuevoComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMaestroModule

    
  ]
})
export class DepartamentosModule { }
