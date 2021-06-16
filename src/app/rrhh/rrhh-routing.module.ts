import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RrhhComponent } from './components/rrhh/rrhh.component';

const routes: Routes = [
  {
    path: '',component: RrhhComponent,
    children: [
      /* {
        path: 'tercero',
        loadChildren: () => import('./pages/tercero/tercero.module').then( m => m.TerceroModule)
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }
