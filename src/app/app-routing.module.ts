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
        loadChildren: () => import('./modulos/dashboard/dashboard.module').then( m => m.DashboardModule)
      },
      {
        path: 'maestro', 
        loadChildren: () => import('./modulos/maestro/maestro.module').then( m => m.MaestroModule)
      },
      {
        path: 'ventas', 
        loadChildren: () => import('./modulos/ventas/ventas.module').then( m => m.VentasModule)
      },
      {
        path: 'gastos', 
        loadChildren: () => import('./modulos/gastos/gastos.module').then( m => m.GastosModule)
      },
      {
        path: 'compras', 
        loadChildren: () => import('./modulos/compras/compras.module').then( m => m.ComprasModule)
      },
      {
        path: 'almacen', 
        loadChildren: () => import('./modulos/almacen/almacen.module').then( m => m.AlmacenModule)
      },
      {
        path: 'finanzas', 
        loadChildren: () => import('./modulos/finanzas/finanzas.module').then( m => m.FinanzasModule)
      },
      {
        path: 'rrhh', 
        loadChildren: () => import('./modulos/rrhh/rrhh.module').then( m => m.RrhhModule)
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
