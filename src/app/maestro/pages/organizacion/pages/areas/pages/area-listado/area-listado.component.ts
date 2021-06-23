import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreaService } from '../../../../services/area.service';
import { DepartamentoService } from '../../../../services/departamento.service';

@Component({
  selector: 'app-area-listado',
  templateUrl: './area-listado.component.html',
  styleUrls: ['./area-listado.component.css']
})
export class AreaListadoComponent implements OnInit {
  
  idDep!: number;
  areaForm!: FormGroup;

  departamentos: any;
  areas!: Array<any>;
  totalPagesArea!: Array<number>;

  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private areaService: AreaService,
    private depService: DepartamentoService,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    
    this.areaForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      departamento: ['',Validators.required]
    });;

    this.depService.getDeps().subscribe(resp => {
      this.departamentos = resp;
    },
      error => { console.error(error) }
    );

    this.getAllAreas();
  }

  //CREATE AREA
  createArea() {
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

  //UPDATE AREA 
  updateArea(area: {id:any, nombre: string, departamento:any}) {
    this.areaForm.setValue({
      id:area.id,
      nombre: area.nombre,
      departamento: area.departamento
   })
  }
  //DELETE AREA BY ID DEP
  deleteArea(area:{ id:number;}) {
    this.areaService.removeArea(area.id).subscribe(data => {
      if(data===true){
        this.getAllAreas()
      }
    });
  }


}
