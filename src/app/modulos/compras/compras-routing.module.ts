import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './components/compras/compras.component';

const routes: Routes = [
  {
    path: '',component: ComprasComponent,
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
export class ComprasRoutingModule { }
