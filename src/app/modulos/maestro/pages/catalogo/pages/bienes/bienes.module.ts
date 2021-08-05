import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienesRoutingModule } from './bienes-routing.module';
import { BienesComponent } from './components/bienes.component';

import { BieneBusquedaComponent } from './pages/biene-busqueda/biene-busqueda.component';
import { BieneDetalleComponent } from './pages/biene-detalle/biene-detalle.component';
import { BieneListadoComponent } from './pages/biene-listado/biene-listado.component';
import { BieneNuevoComponent } from './pages/biene-nuevo/biene-nuevo.component';
import { BieneEditadoComponent } from './pages/biene-editado/biene-editado.component';

//external FIJARSE SI DEBE O NO 
import { MaterialMaestroModule } from '../../../../plus/material.maestro.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BienesComponent,
    BieneBusquedaComponent,
    BieneDetalleComponent,
    BieneListadoComponent,
    BieneNuevoComponent,
    BieneEditadoComponent

  ],
  imports: [
    CommonModule,
    BienesRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialMaestroModule,
  ]
})
export class BienesModule { }
