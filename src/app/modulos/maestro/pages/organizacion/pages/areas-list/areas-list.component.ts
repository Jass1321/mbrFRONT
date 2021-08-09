import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../services/area.service';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.css']
})
export class AreasListComponent implements OnInit {
  
  idDep = 0;
  areaForm!: FormGroup;
  
  departamentos!: Array<any>;
  areas!: Array<any>;

  constructor(
    public fb: FormBuilder,
    private routeActive: ActivatedRoute,
    private areaService: AreaService,
    private depService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.idDep = +this.routeActive.snapshot.params['id'];
    
    this.areaForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required]
    });;

    this.depService.getDepById(this.idDep).subscribe(
      dataDep => {
        this.departamentos = dataDep;
      });

    this.getAreasByIdDep();
  }

  //------------ AREA C-R-U-D ------------
  //CREATE AREA BY ID DEP
  createArea() {
    this.areaService.createArea(this.idDep, this.areaForm.value).subscribe(
      data => {
        this.areaForm.reset();
        this.getAreasByIdDep();
        console.log(data);
      },
      error => {
        console.log(error);
      });  
  }
  //READ AREA BY ID DEP
  private getAreasByIdDep(){
    this.areaService.getAreasById(this.idDep).subscribe(
      data => {
        this.areas = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });
  }
  //UPDATE AREA BY ID DEP
  updateArea(area: {id:any, nombre: string}) {
    this.areaForm.setValue({
      id:area.id,
      nombre: area.nombre 
   })
  }
  //DELETE AREA BY ID DEP
  deleteArea(idArea: number) {
    this.areaService.deleteArea(this.idDep, idArea).subscribe(
      data => {
        this.getAreasByIdDep()
      });
  }
}