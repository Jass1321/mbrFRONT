import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/components/stock.component';
import { ProductoListadoComponent } from './stock/pages/producto-listado/producto-listado.component';
import { ProductoNuevoComponent } from './stock/pages/producto-nuevo/producto-nuevo.component';
const routes: Routes = [
  {
    path: '', component: StockComponent,
    children:[
      {path: 'list', component: ProductoListadoComponent},
      {path: 'add', component: ProductoNuevoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
