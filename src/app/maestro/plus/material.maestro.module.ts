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
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';

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
        MatMenuModule
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
        MatMenuModule
    ]
})
export class MaterialMaestroModule {}