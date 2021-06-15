import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { OrganizacionComponent } from './components/organizacion.component';


@NgModule({
  declarations: [
    OrganizacionComponent
  ],
  imports: [
    CommonModule,
    OrganizacionRoutingModule
  ]
})
export class OrganizacionModule { }
