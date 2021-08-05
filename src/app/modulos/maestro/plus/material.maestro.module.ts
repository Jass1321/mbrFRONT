import { NgModule } from '@angular/core';

//Maestro-Tablero
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
//Pages
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSelectModule,
        MatDatepickerModule,
        MatTableModule,
        
    ],
    exports: [
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSelectModule,
        MatDatepickerModule,
        MatTableModule
    ]
})
export class MaterialMaestroModule {}