import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinanzasComponent } from './components/finanzas/finanzas.component';

const routes: Routes = [
  {
    path: '',component: FinanzasComponent,
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
export class FinanzasRoutingModule { }
