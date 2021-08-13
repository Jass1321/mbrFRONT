import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Solo una vez LAZY LOADING
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Rutas principales
import { IndexComponent } from './layouts/components/index/index.component';
import { Error404Component } from './layouts/page/error404/error404.component';
import { Error500Component } from './layouts/page/error500/error500.component';

//Modulos principales
import { MateriaLayoutslModule } from './layouts/extra/material/material.layouts.module';
import { ToastrModule } from 'ngx-toastr';
import { StockModule } from './modulos/almacen/pages/stock.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    MateriaLayoutslModule,
    StockModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
