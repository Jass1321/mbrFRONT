import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BancosComponent } from './components/bancos.component';

import { BancoDetalleComponent } from './pages/banco-detalle/banco-detalle.component';
import { BancoListadoComponent } from './pages/banco-listado/banco-listado.component';

const routes: Routes = [
  {
    path: '',component: BancosComponent,
    children: [
      {path: 'list', component: BancoListadoComponent},
      {path: 'detail/:id', component: BancoDetalleComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancosRoutingModule { }
