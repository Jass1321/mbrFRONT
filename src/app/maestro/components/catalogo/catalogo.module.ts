import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './components/catalogo.component';

import { ProductoComponent } from './pages/producto/producto.component';

//External
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogoComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FormsModule,
  ]
})
export class CatalogoModule { }
