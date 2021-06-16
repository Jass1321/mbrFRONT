import { NgModule } from '@angular/core';

//Maestro-Tablero
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
//Pages
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
@NgModule({
    imports: [
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule
    ],
    exports: [
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule
    ]
})
export class MaterialMaestroModule {}