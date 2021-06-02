import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoComponent } from './components/banco/banco.component';

import { TableroComponent } from './tablero/tablero.component';

const routes: Routes = [
  {
    path: '',component: TableroComponent,
    children: [
      {
        path: 'tercero',
        loadChildren: () => import('./components/tercero/tercero.module').then( m => m.TerceroModule)
      },
      {
        path: 'catalogo',
        loadChildren: () => import('./components/catalogo/catalogo.module').then( m => m.CatalogoModule)
      },
      {path: 'banco', component: BancoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
