import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { OrganizacionComponent } from './components/organizacion.component';

//Plus
import { MaterialMaestroModule } from '../../plus/material.maestro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrganizacionComponent
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
