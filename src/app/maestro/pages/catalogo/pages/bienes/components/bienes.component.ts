import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BieneNuevoComponent } from '../pages/biene-nuevo/biene-nuevo.component';

@Component({
  selector: 'app-bienes',
  templateUrl: './bienes.component.html',
  styleUrls: ['./bienes.component.css']
})
export class BienesComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
     private router: Router ) {}
 
  ngOnInit(): void {
    
  }

 /*  openDialog() : void {
    
    const dialogRef = this.dialog.open(BieneNuevoComponent, {
      width: '100%',
      disableClose: true,
      autoFocus: true,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigateByUrl('/maestro/catalogo/bienes/list');
    });
  
  } */

}
