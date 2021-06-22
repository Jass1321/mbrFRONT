import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from '../../../../models/departamento';
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
  depForm!: FormGroup;
  alert: boolean = false;

  departamentos!: Array<any>;
  areas!: Array<any>;
  totalPagesDep!: Array<number>;
  totalPagesArea!: Array<number>;
  
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
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.depForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.getAllDepas();
    this.getAllAreas();
  }

  //CREATE DEPA
  createDep(): void {
    this.depService.createDepartamento(this.depForm.value).subscribe(
      data=>{
        this.depForm.reset();
        this.getAllDepas();
        },
      err => {
        console.log(err)
      }
    )
  }

  //READ DEPA
  private getAllDepas(){
    this.depService.getListAllDepa(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.departamentos = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesDep = new Array(data['totalPages']);
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
  //UPDATE DEPA
  updateDep(departamento: {id:any, nombre: string}) {
    this.depForm.setValue({
      id:departamento.id,
      nombre: departamento.nombre 
   })
  }
  //DELETE DEPA
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

  
  //READ AREA
  private getAllAreas(){
    this.areaService.getListAllArea(this.page, this.size, this.order, this.asc).subscribe( 
      data => {
        this.areas = data.content; 
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesArea = new Array(data['totalPages']);
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
