import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoRoutingModule } from './banco-routing.module';
import { BancoComponent } from './components/banco.component';

//Plus
import { MaterialMaestroModule } from '../../plus/material.maestro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BancoComponent,
  ],
  imports: [
    CommonModule,
    BancoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMaestroModule,
  ]
})
export class BancoModule { }
