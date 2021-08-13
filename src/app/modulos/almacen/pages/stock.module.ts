import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { ProductoComponent } from './stock/producto/producto.component';
import { StockComponent } from './stock/components/stock.component';

//external FIJARSE SI DEBE O NO 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialMaestroModule } from '../../maestro/plus/material.maestro.module';

import { ProductoNuevoComponent } from './stock/pages/producto-nuevo/producto-nuevo.component';
import { ProductoListadoComponent } from './stock/pages/producto-listado/producto-listado.component';
import { ProductoBusquedaComponent } from './stock/pages/producto-busqueda/producto-busqueda.component';


@NgModule({
  declarations: [
    StockComponent,
    ProductoComponent,
    ProductoNuevoComponent,
    ProductoListadoComponent,
    ProductoBusquedaComponent

  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgxMatSelectSearchModule,
    MaterialMaestroModule
  ]
})
export class StockModule { }
