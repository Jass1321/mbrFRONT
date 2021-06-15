import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizacionComponent } from './components/organizacion.component';

const routes: Routes = [
  { 
    path: '',component: OrganizacionComponent,
    children: [
      {
        path: 'departamentos',
        loadChildren: () => import('./pages/departamentos/departamentos.module').then( m => m.DepartamentosModule)
      },
      {
        path: 'areas',
        loadChildren: () => import('./pages/areas/areas.module').then( m => m.AreasModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizacionRoutingModule { }
