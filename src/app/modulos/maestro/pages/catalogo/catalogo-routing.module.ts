import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './components/catalogo.component';

const routes: Routes = [
  { 
    path: '',component: CatalogoComponent,
    children: [
      {
        path: 'bienes',
        loadChildren: () => import('./pages/bienes/bienes.module').then( m => m.BienesModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('./pages/servicios/servicios.module').then( m => m.ServiciosModule)
      },
    ]
  },
  //{ path: '**',redirectTo: 'catalogo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
