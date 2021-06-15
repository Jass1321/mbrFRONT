import { NgModule } from '@angular/core';

//Maestro-Tablero
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
//Pages
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule
    ],
    exports: [
        MatTabsModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class MaterialMaestroModule {}