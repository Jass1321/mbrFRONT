import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//External
import { LayoutModule } from '@angular/cdk/layout';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Rutas principales
import { IndexComponent } from './layouts/components/index/index.component';
import { Error404Component } from './layouts/page/error404/error404.component';
import { Error500Component } from './layouts/page/error500/error500.component';

//Modulos principales
import { MateriaLayoutslModule } from './layouts/extra/material/material.layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MateriaLayoutslModule,
    BrowserAnimationsModule,
    LayoutModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
