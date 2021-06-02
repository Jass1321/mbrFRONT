import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerceroComponent } from './components/tercero.component';

import { DetalleComponent } from './pages/detalle/detalle.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';

const routes: Routes = [
  {
    path: '',component: TerceroComponent,
    children: [
      {path: 'listar', component: ListarComponent},
      {path: 'detalle/:id', component: DetalleComponent},
      {path: 'nuevo', component: NuevoComponent},
      {path: 'editar/:id', component: EditarComponent},
    ]
  },
 // {path: '**', redirectTo: 'listar'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TerceroRoutingModule { }
