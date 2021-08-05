import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { OrganizacionComponent } from './components/organizacion.component';

import { AreasListComponent } from './pages/areas-list/areas-list.component';
import { DepartamentosListComponent } from './pages/departamentos-list/departamentos-list.component';
import { DepartamentosDetailComponent } from './pages/departamentos-detail/departamentos-detail.component';

//Plus
import { MaterialMaestroModule } from '../../plus/material.maestro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrganizacionComponent,
    AreasListComponent,
    DepartamentosListComponent,
    DepartamentosDetailComponent,
  ],
  imports: [
    CommonModule,
    OrganizacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMaestroModule,
  ]
})
export class OrganizacionModule { }
