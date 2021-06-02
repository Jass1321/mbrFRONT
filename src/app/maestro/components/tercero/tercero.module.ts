import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceroRoutingModule } from './tercero-routing.module';
import { TerceroComponent } from './components/tercero.component';

import { EditarComponent } from './pages/editar/editar.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

//external
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TerceroComponent,
    NuevoComponent,
    EditarComponent,
    ListarComponent,
    DetalleComponent,
    
  ],
  imports: [
    CommonModule,
    TerceroRoutingModule,
    RouterModule,
    ToastrModule.forRoot(),
    FormsModule
  ]
})
export class TerceroModule { }
