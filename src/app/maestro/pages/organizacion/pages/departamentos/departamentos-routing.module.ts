import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartamentosComponent } from './components/departamentos.component';

import { DepartamentoDetalleComponent } from './pages/departamento-detalle/departamento-detalle.component';
import { DepartamentoEditadoComponent } from './pages/departamento-editado/departamento-editado.component';
import { DepartamentoListadoComponent } from './pages/departamento-listado/departamento-listado.component';
import { DepartamentoNuevoComponent } from './pages/departamento-nuevo/departamento-nuevo.component';

const routes: Routes = [
  {
    path: '',component: DepartamentosComponent,
    children: [
      {path: 'list', component: DepartamentoListadoComponent},
      {path: 'detail/:id', component: DepartamentoDetalleComponent},
      {path: 'edit/:id', component: DepartamentoEditadoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
