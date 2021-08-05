import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerceroComponent } from './components/tercero.component';

const routes: Routes = [
  {
    path: '',component: TerceroComponent,
    children: [
      {
        path: 'proveedores',
        loadChildren: () => import('./pages/proveedores/proveedores.module').then( m => m.ProveedoresModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesModule)
      }
    ]
  },
 // {path: '**', redirectTo: 'listar'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TerceroRoutingModule { }
