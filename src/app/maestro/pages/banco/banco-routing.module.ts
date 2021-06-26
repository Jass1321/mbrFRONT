import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BancoComponent } from './components/banco.component';
import { BancosDetailComponent } from './pages/bancos-detail/bancos-detail.component';
import { BancosListComponent } from './pages/bancos-list/bancos-list.component';
import { CuentaBancariasListComponent } from './pages/cuenta-bancarias-list/cuenta-bancarias-list.component';

const routes: Routes = [
  {
    path: '',component: BancoComponent,
    children: [
      {path: 'list', component: BancosListComponent},
      {path: 'detail', component: BancosDetailComponent, 
        children: [
          {path: 'banco/:id', component: CuentaBancariasListComponent},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoRoutingModule { }
