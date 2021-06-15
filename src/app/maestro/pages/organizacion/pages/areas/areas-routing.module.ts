import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreasComponent } from './components/areas.component';

import { AreaDetalleComponent } from './pages/area-detalle/area-detalle.component';
import { AreaEditadoComponent } from './pages/area-editado/area-editado.component';
import { AreaListadoComponent } from './pages/area-listado/area-listado.component';
import { AreaNuevoComponent } from './pages/area-nuevo/area-nuevo.component';

const routes: Routes = [
  {
    path: '',component: AreasComponent,
    children: [
      {path: 'list', component: AreaListadoComponent},
      {path: 'detail/:id', component: AreaDetalleComponent},
      {path: 'add', component: AreaNuevoComponent},
      {path: 'edit/:id', component: AreaEditadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
