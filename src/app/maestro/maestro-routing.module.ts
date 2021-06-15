import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaestroComponent } from './components/maestro.component';

const routes: Routes = [
  {
    path: '',component: MaestroComponent,
    children: [
      {
        path: 'tercero',
        loadChildren: () => import('./pages/tercero/tercero.module').then( m => m.TerceroModule)
      },
      {
        path: 'banco',
        loadChildren: () => import('./pages/banco/banco.module').then( m => m.BancoModule)
      },
      {
        path: 'catalogo',
        loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoModule)
      },
      {
        path: 'organizacion',
        loadChildren: () => import('./pages/organizacion/organizacion.module').then( m => m.OrganizacionModule)
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
