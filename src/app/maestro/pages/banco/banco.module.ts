import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoRoutingModule } from './banco-routing.module';
import { BancoComponent } from './components/banco.component';

//Plus
import { MaterialMaestroModule } from '../../plus/material.maestro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BancosListComponent } from './pages/bancos-list/bancos-list.component';
import { BancosDetailComponent } from './pages/bancos-detail/bancos-detail.component';
import { CuentaBancariasListComponent } from './pages/cuenta-bancarias-list/cuenta-bancarias-list.component';



@NgModule({
  declarations: [
    BancoComponent,
    BancosListComponent,
    BancosDetailComponent,
    CuentaBancariasListComponent,
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
