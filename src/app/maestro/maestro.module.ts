import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//external
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { MaestroRoutingModule } from './maestro-routing.module';
import { MaterialMaestroModule } from './plus/material.maestro.module';

import { TableroComponent } from './tablero/tablero.component';

import { BancoComponent } from './components/banco/banco.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { OrganizacionComponent } from './components/organizacion/organizacion.component';
import { TerceroModule } from './components/tercero/tercero.module';

@NgModule({
  declarations: [
    BancoComponent,
    CatalogoComponent,
    OrganizacionComponent,
    TableroComponent,
  ],
  imports: [
    CommonModule,
    MaestroRoutingModule,
    MaterialMaestroModule,
    RouterModule,
    ToastrModule.forRoot(),
  ]
})
export class MaestroModule { }
