import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienesComponent } from './components/bienes.component';

import { BieneDetalleComponent } from './pages/biene-detalle/biene-detalle.component';
import { BieneEditadoComponent } from './pages/biene-editado/biene-editado.component';
import { BieneListadoComponent } from './pages/biene-listado/biene-listado.component';
import { BieneNuevoComponent } from './pages/biene-nuevo/biene-nuevo.component';

const routes: Routes = [
  {
    path: '',component: BienesComponent,
    children: [
      {path: 'list', component: BieneListadoComponent},
      {path: 'detail/:id', component: BieneDetalleComponent},
      {path: 'add', component: BieneNuevoComponent},
      {path: 'editar/:id', component: BieneEditadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienesRoutingModule { }
