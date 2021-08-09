import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './components/servicios.component';

import { ServicioListComponent } from './pages/servicio-list/servicio-list.component';
import { TipoServicioListComponent } from './pages/tipo-servicio-list/tipo-servicio-list.component';
import { TipoServicioDetailComponent } from './pages/tipo-servicio-detail/tipo-servicio-detail.component';

//Plus
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialMaestroModule } from 'src/app/modulos/maestro/plus/material.maestro.module';


@NgModule({
  declarations: [
    ServiciosComponent,
    ServicioListComponent,
    TipoServicioListComponent,
    TipoServicioDetailComponent,
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialMaestroModule,
  ]
})
export class ServiciosModule { }
