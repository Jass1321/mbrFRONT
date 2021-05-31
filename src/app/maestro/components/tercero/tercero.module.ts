import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//external
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TerceroRoutingModule } from './tercero-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { TerceroComponent } from './components/tercero.component';

@NgModule({
  declarations: [
    NuevoComponent,
    EditarComponent,
    ListarComponent,
    DetalleComponent,
    TerceroComponent,
  ],
  imports: [
    CommonModule,
    TerceroRoutingModule,
    RouterModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class TerceroModule { }
