import { NgModule } from '@angular/core';

//Maestro-Tablero
import {MatTabsModule} from '@angular/material/tabs';
//Pages
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        MatTabsModule,
        MatDialogModule
    ],
    exports: [
        MatTabsModule,
        MatDialogModule
    ]
})
export class MaterialMaestroModule {}