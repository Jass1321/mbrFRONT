import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartamentoComponent } from './components/departamento.component';

import { DepartamentoDetalleComponent } from './pages/departamento-detalle/departamento-detalle.component';
import { DepartamentoListadoComponent } from './pages/departamento-listado/departamento-listado.component';

const routes: Routes = [
  {
    path: '',component: DepartamentoComponent ,
    children: [
      {path: 'list', component: DepartamentoListadoComponent},
      {path: 'detail/:id', component: DepartamentoDetalleComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
