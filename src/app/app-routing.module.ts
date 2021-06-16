import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { IndexComponent } from './layouts/components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
      },
      {
        path: 'maestro', 
        loadChildren: () => import('./maestro/maestro.module').then( m => m.MaestroModule)
      },
      {
        path: 'ventas', 
        loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasModule)
      },
      {
        path: 'gastos', 
        loadChildren: () => import('./gastos/gastos.module').then( m => m.GastosModule)
      },
      {
        path: 'compras', 
        loadChildren: () => import('./compras/compras.module').then( m => m.ComprasModule)
      },
      {
        path: 'almacen', 
        loadChildren: () => import('./almacen/almacen.module').then( m => m.AlmacenModule)
      },
      {
        path: 'finanzas', 
        loadChildren: () => import('./finanzas/finanzas.module').then( m => m.FinanzasModule)
      },
      {
        path: 'rrhh', 
        loadChildren: () => import('./rrhh/rrhh.module').then( m => m.RrhhModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'maestro',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
