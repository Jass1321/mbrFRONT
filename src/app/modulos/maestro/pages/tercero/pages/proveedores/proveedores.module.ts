import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './components/proveedores.component';

import { ProveedorNuevoComponent } from './pages/proveedor-nuevo/proveedor-nuevo.component';
import { ProveedorDetalleComponent } from './pages/proveedor-detalle/proveedor-detalle.component';
import { ProveedorListadoComponent } from './pages/proveedor-listado/proveedor-listado.component';
import { ProveedorEditadoComponent } from './pages/proveedor-editado/proveedor-editado.component';

//external FIJARSE SI DEBE O NO 
import { MaterialMaestroModule } from '../../../../plus/material.maestro.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FilterProveedorPipe } from 'src/app/pipes/filter-proveedor.pipe';


@NgModule({
  declarations: [
    ProveedoresComponent,
    ProveedorNuevoComponent,
    ProveedorDetalleComponent,
    ProveedorListadoComponent,
    ProveedorEditadoComponent,
    FilterProveedorPipe
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialMaestroModule,
    NgxMatSelectSearchModule
  ]
})
export class ProveedoresModule { }
