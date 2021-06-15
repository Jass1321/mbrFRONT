import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestroRoutingModule } from './maestro-routing.module';
import { MaestroComponent } from './components/maestro.component';

//Plus
import { MaterialMaestroModule } from './plus/material.maestro.module';
import { NgxBootstrapMaestroModule } from './plus/ngx-bootstrap.maestro.module';

@NgModule({
  declarations: [
    MaestroComponent
  ],
  imports: [
    CommonModule,
    MaestroRoutingModule,

    MaterialMaestroModule,
    NgxBootstrapMaestroModule
  ]
})
export class MaestroModule { }
