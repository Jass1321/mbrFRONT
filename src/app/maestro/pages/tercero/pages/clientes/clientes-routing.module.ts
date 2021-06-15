import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './components/clientes.component';

import { ClienteDetalleComponent } from './pages/cliente-detalle/cliente-detalle.component';
import { ClienteEditadoComponent } from './pages/cliente-editado/cliente-editado.component';
import { ClienteListadoComponent } from './pages/cliente-listado/cliente-listado.component';
import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';

const routes: Routes = [
  {
    path: '',component: ClientesComponent,
    children: [
      {path: 'list', component: ClienteListadoComponent},
      {path: 'detail/:id', component: ClienteDetalleComponent},
      {path: 'add', component: ClienteNuevoComponent},
      {path: 'editar/:id', component: ClienteEditadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
