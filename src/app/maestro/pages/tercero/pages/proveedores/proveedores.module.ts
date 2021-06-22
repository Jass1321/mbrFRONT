import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './components/proveedores.component';

import { ProveedorNuevoComponent } from './pages/proveedor-nuevo/proveedor-nuevo.component';
import { ProveedorBusquedaComponent } from './pages/proveedor-busqueda/proveedor-busqueda.component';
import { ProveedorDetalleComponent } from './pages/proveedor-detalle/proveedor-detalle.component';
import { ProveedorListadoComponent } from './pages/proveedor-listado/proveedor-listado.component';
import { ProveedorEditadoComponent } from './pages/proveedor-editado/proveedor-editado.component';

//external FIJARSE SI DEBE O NO 

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProveedoresComponent,
    ProveedorNuevoComponent,
    ProveedorBusquedaComponent,
    ProveedorDetalleComponent,
    ProveedorListadoComponent,
    ProveedorEditadoComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    FormsModule,
  ]
})
export class ProveedoresModule { }
