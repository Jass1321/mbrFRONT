import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiciosComponent } from './components/servicios.component';

import { ServicioDetalleComponent } from './pages/servicio-detalle/servicio-detalle.component';
import { ServicioEditadoComponent } from './pages/servicio-editado/servicio-editado.component';
import { ServicioListadoComponent } from './pages/servicio-listado/servicio-listado.component';
import { ServicioNuevoComponent } from './pages/servicio-nuevo/servicio-nuevo.component';

const routes: Routes = [
  {
    path: '',component: ServiciosComponent,
    children: [
      {path: 'list', component: ServicioListadoComponent},
      {path: 'detail/:id', component: ServicioDetalleComponent},
      {path: 'add', component: ServicioNuevoComponent},
      {path: 'editar/:id', component: ServicioEditadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
