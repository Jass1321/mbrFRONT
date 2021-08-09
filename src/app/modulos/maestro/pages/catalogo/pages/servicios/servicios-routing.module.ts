import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiciosComponent } from './components/servicios.component';

import { ServicioListComponent } from './pages/servicio-list/servicio-list.component';
import { TipoServicioDetailComponent } from './pages/tipo-servicio-detail/tipo-servicio-detail.component';
import { TipoServicioListComponent } from './pages/tipo-servicio-list/tipo-servicio-list.component';

const routes: Routes = [
  {
    path: '',component: ServiciosComponent,
    children: [
      {path: 'list', component: TipoServicioListComponent},
      {path: 'detail', component: TipoServicioDetailComponent,
        children: [
          {path: 'servicio/:id', component: ServicioListComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
