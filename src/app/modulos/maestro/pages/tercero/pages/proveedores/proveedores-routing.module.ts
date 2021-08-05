import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProveedoresComponent } from './components/proveedores.component';

import { ProveedorDetalleComponent } from './pages/proveedor-detalle/proveedor-detalle.component';
import { ProveedorEditadoComponent } from './pages/proveedor-editado/proveedor-editado.component';
import { ProveedorListadoComponent } from './pages/proveedor-listado/proveedor-listado.component';
import { ProveedorNuevoComponent } from './pages/proveedor-nuevo/proveedor-nuevo.component';

const routes: Routes = [
  {
    path: '',component: ProveedoresComponent,
    children: [
      {path: 'list', component: ProveedorListadoComponent},
      {path: 'detail/:id', component: ProveedorDetalleComponent},
      {path: 'add', component: ProveedorNuevoComponent},
      {path: 'edit/:id', component: ProveedorEditadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
