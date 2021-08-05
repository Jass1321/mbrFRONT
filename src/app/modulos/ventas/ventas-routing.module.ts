import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {
    path: '',component: VentasComponent,
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
export class VentasRoutingModule { }
