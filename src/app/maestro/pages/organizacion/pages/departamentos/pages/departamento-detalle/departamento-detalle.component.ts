import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../../../services/area.service';
import { DepartamentoService } from '../../../../services/departamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrls: ['./departamento-detalle.component.css']
})
export class DepartamentoDetalleComponent implements OnInit {

  idDep!: number;
  areaForm!: FormGroup;
  
  departamentos!: Array<any>;
  areas!: Array<any>;

  constructor(
    private areaService: AreaService,
    private routeActive: ActivatedRoute,
    public fb: FormBuilder,
    private depService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.idDep = this.routeActive.snapshot.params['id'];
    
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
    this.areaService.deleteArea(this.idDep, idArea).subscribe(data => {
      this.getAreasByIdDep()
    });
  }


  

}
