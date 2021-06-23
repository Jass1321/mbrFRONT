import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './components/area.component';

import { AreaListadoComponent } from './pages/area-listado/area-listado.component';

const routes: Routes = [
  {
    path: '',component: AreaComponent ,
    children: [
      {path: 'list', component: AreaListadoComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
