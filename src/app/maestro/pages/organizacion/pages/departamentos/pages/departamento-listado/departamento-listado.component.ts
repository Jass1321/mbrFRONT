import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AreaService } from '../../../../services/area.service';
import { DepartamentoService } from '../../../../services/departamento.service';
import { DepartamentoEditadoComponent } from '../departamento-editado/departamento-editado.component';
import { DepartamentoNuevoComponent } from '../departamento-nuevo/departamento-nuevo.component';

@Component({
  selector: 'app-departamento-listado',
  templateUrl: './departamento-listado.component.html',
  styleUrls: ['./departamento-listado.component.css']
})

export class DepartamentoListadoComponent implements OnInit {

  
  idDep!: number;
  alert: boolean = false;

  departamentos!: Array<any>;
  areas!: Array<any>;
  totalPages!: Array<number>;
  
  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private depService: DepartamentoService,
    private areaService: AreaService,
    private route: Router,
    public fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllDepas();
    this.getAllAreas();
  }

  //READ DEPA
  private getAllDepas(){
    this.depService.getListAllDepa(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.departamentos = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  viewAreas(id: number) {
    this.route.navigate(['/maestro/organizacion/departamentos/detail', id]);
  }

  updateDep(id: number) {
    this.route.navigate(['/maestro/organizacion/departamentos/edit', id],
    );
    
  }

  deleteDep(id: number) {
    this.depService.deleteDepartamento(id).subscribe(
      data => {
        this.getAllDepas()
      });
  }
  //SEARCH DEPA
  setOrderDep(order: string): void {
    this.order = order;
    this.getAllDepas();
  }
  sortDep(): void {
    this.asc = !this.asc;
    this.getAllDepas();
  }
  //PAGINACION
  rewindDep(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllDepas();
    }
  }

  forwardDep(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllDepas();
    }
  }

  setPageDep(page: number): void {
    this.page = page;
    this.getAllDepas();
  }

  //OPEN NEW DEPA
  openNewDep() {
    const dialogRef = this.dialog. open(DepartamentoNuevoComponent, 
      {
        width: '400px',
        disableClose: true,
      });
      
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.route.navigate(['/maestro/organizacion/departamentos/list']);
    });
  }

  
  
  //READ AREA
  private getAllAreas(){
    this.areaService.getListAllArea(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.areas = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  
  updateArea(idArea: number) {
    this.route.navigate(['/maestro/organizacion/areas/edit', idArea]);
  }

  deleteArea(idArea: number) {
    this.areaService.deleteArea(this.idDep, idArea).subscribe(data => {
      this.getAllAreas()
    });
  }
  
  //SEARCH AREA
  setOrderArea(order: string): void {
    this.order = order;
    this.getAllAreas();
  }
  sortArea(): void {
    this.asc = !this.asc;
    this.getAllAreas();
  }
  //PAGINACION
  rewindArea(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllAreas();
    }
  }
  forwardArea(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllAreas();
    }
  }
  setPageArea(page: number): void {
    this.page = page;
    this.getAllAreas();
  }


}
