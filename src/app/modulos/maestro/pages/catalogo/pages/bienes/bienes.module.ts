import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienesRoutingModule } from './bienes-routing.module';
import { BienesComponent } from './components/bienes.component';

import { FamiliaListComponent } from './pages/familia-list/familia-list.component';
import { FamiliaDetailComponent } from './pages/familia-detail/familia-detail.component';
import { SubfamiliaListComponent } from './pages/subfamilia-list/subfamilia-list.component';
import { MarcaListComponent } from './pages/marca-list/marca-list.component';


//external FIJARSE SI DEBE O NO 
import { MaterialMaestroModule } from '../../../../plus/material.maestro.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BienesComponent,
    FamiliaListComponent,
    FamiliaDetailComponent,
    SubfamiliaListComponent,
    MarcaListComponent

  ],
  imports: [
    CommonModule,
    BienesRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialMaestroModule,
  ]
})
export class BienesModule { }
