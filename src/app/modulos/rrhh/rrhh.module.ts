import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { RrhhComponent } from './components/rrhh/rrhh.component';
import { TacksListComponent } from './pages/tacks-list/tacks-list.component';
import { AlbumListComponent } from './pages/album-list/album-list.component';


@NgModule({
  declarations: [
    RrhhComponent,
    TacksListComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
