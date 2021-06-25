import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizacionComponent } from './components/organizacion.component';

import { AreasListComponent } from './pages/areas-list/areas-list.component';
import { DepartamentosListComponent } from './pages/departamentos-list/departamentos-list.component';
import { DepartamentosDetailComponent } from './pages/departamentos-detail/departamentos-detail.component';

const routes: Routes = [
  { 
    path: '',component: OrganizacionComponent,
    children: [
      {path: 'list', component: DepartamentosListComponent},
      {path: 'detail', component: DepartamentosDetailComponent, 
        children: [
          {path: 'departamento/:id', component: AreasListComponent},
        ]
      },
    ] 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizacionRoutingModule { }
