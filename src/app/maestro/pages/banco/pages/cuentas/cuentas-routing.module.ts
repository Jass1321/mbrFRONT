import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CuentasComponent } from './components/cuentas.component';

import { CuentaDetalleComponent } from './pages/cuenta-detalle/cuenta-detalle.component';
import { CuentaEditadoComponent } from './pages/cuenta-editado/cuenta-editado.component';
import { CuentaListadoComponent } from './pages/cuenta-listado/cuenta-listado.component';
import { CuentaNuevoComponent } from './pages/cuenta-nuevo/cuenta-nuevo.component';

const routes: Routes = [
  {
    path: '',component: CuentasComponent,
    children: [
      {path: 'list', component: CuentaListadoComponent},
      {path: 'detail/:id', component: CuentaDetalleComponent},
      {path: 'add', component: CuentaNuevoComponent},
      {path: 'editar/:id', component: CuentaEditadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasRoutingModule { }
