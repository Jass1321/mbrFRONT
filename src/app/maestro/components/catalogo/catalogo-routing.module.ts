import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './components/catalogo.component';

import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  { 
    path: '',component: CatalogoComponent,
    children: [
      {path: 'productos', component: ProductoComponent}
    ]
  },
  //{ path: '**',redirectTo: 'catalogo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
