import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { OrganizacionComponent } from './components/organizacion.component';

//Plus
import { MaterialMaestroModule } from '../../plus/material.maestro.module';

@NgModule({
  declarations: [
    OrganizacionComponent
  ],
  imports: [
    CommonModule,
    OrganizacionRoutingModule,
    MaterialMaestroModule
  ]
})
export class OrganizacionModule { }
