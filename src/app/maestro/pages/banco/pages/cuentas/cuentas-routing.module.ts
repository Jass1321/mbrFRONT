import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CuentasComponent } from './components/cuentas.component';

import { CuentaListadoComponent } from './pages/cuenta-listado/cuenta-listado.component';
import { CuentaNuevoComponent } from './pages/cuenta-nuevo/cuenta-nuevo.component';

const routes: Routes = [
  {
    path: '',component: CuentasComponent,
    children: [
      {path: 'list', component: CuentaListadoComponent},
      {path: 'add', component: CuentaNuevoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasRoutingModule { }
