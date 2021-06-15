import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BancoComponent } from './components/banco.component';

const routes: Routes = [
  {
    path: '',component: BancoComponent,
    children: [
      {
        path: 'cuentas',
        loadChildren: () => import('./pages/cuentas/cuentas.module').then( m => m.CuentasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoRoutingModule { }
