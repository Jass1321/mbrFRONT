import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlmacenComponent } from './components/almacen/almacen.component';

const routes: Routes = [
  {
    path: '',component: AlmacenComponent,
    children: [
      {
        path: 'stock',
        loadChildren: () => import('./pages/stock.module').then( m => m.StockModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenRoutingModule { }
