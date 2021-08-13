import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './components/catalogo.component';

//External Si sirve?
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FormsModule
  ]
})
export class CatalogoModule { }
