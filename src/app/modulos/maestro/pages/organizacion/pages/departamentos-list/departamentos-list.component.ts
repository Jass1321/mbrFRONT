import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaService } from '../../services/area.service';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-departamentos-list',
  templateUrl: './departamentos-list.component.html',
  styleUrls: ['./departamentos-list.component.css']
})
export class DepartamentosListComponent implements OnInit {

  idDep!: number;

  depForm!: FormGroup;
  areaForm!: FormGroup;

  areas!: Array<any>;
  departamentos!: Array<any>;

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
    public fb: FormBuilder,
    private route: Router,
    private areaService: AreaService,
    private depService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.depForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.areaForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      dep: ['']
    });;

    this.depService.getDepById(this.idDep).subscribe(
      dataDep => {
        this.departamentos = dataDep;
    });

    this.getAllAreas();  
    this.getAllDepas();
  }

  //------------ DEPARTAMENTO C-R-U-D ------------
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

   //----------- VIEW AREA BY ID DEP---------
   viewAreas(id: number) {
    this.route.navigate(['/maestro/organizacion/detail/departamento', id]);
  }

  //------------AREA R-U-D------------
  //SAVE AREA 
  createArea(): void{
    this.areaService.saveArea(this.areaForm.value).subscribe(
      data => {
        this.areaForm.reset();
        this.getAllAreas();
        console.log(data);
      },
      error => {
        console.log(error);
      });  
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
  //UPDATE AREA 
  updateArea(area: {id:any, nombre: string, dep: any}) {
    this.areaForm.setValue({
      id:area.id,
      nombre: area.nombre,
      dep: area.dep
   })
  }
  //DELETE AREA 
  deleteArea(id:number) {
    this.areaService.removeArea(id).subscribe(
      data => {
      if(data===true){
        this.getAllAreas();
      }
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
