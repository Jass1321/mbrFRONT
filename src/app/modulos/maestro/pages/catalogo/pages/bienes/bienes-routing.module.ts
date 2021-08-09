import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienesComponent } from './components/bienes.component';
import { FamiliaDetailComponent } from './pages/familia-detail/familia-detail.component';
import { FamiliaListComponent } from './pages/familia-list/familia-list.component';
import { SubfamiliaListComponent } from './pages/subfamilia-list/subfamilia-list.component';

const routes: Routes = [
  {
    path: '',component: BienesComponent,
    children: [
      {path: 'list', component: FamiliaListComponent},
      {path: 'detail', component: FamiliaDetailComponent,
        children: [
          {path: 'subfamilia/:id', component: SubfamiliaListComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienesRoutingModule { }
