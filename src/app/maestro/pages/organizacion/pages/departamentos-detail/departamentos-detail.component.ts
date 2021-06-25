import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-departamentos-detail',
  templateUrl: './departamentos-detail.component.html',
  styleUrls: ['./departamentos-detail.component.css']
})
export class DepartamentosDetailComponent implements OnInit {

  depForm!: FormGroup;
  departamentos!: Array<any>;
  totalPagesArea!: Array<number>;
  totalPagesDep!: Array<number>;

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
    private depService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.depForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

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
  public getAllDepas(){
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

  //------------ VIEW AREA BY ID DEP ------------
  backList() {
    this.route.navigate(['/maestro/organizacion/list']);
  }
}
