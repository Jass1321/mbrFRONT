import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {
    path: '',component: GastosComponent,
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
export class GastosRoutingModule { }
