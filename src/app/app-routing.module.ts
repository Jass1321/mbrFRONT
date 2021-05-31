import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { IndexComponent } from './layouts/components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'maestro', 
        loadChildren: () => import('./maestro/maestro.module').then( m => m.MaestroModule),
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
