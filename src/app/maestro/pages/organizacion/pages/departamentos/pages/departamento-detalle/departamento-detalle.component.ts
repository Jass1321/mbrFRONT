import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from '../../../../services/area.service';
import { DepartamentoService } from '../../../../services/departamento.service';
import { Area } from '../../../../models/area';

@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrls: ['./departamento-detalle.component.css']
})
export class DepartamentoDetalleComponent implements OnInit {

  idDep!: number;
  alert:boolean = false;
  area: Area = new Area();
  
  departamentos!: Array<any>;
  areas!: Array<any>;
  
  //PAGINACION
  totalPages!: Array<number>;
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private areaService: AreaService,
    private routeActive: ActivatedRoute,
    private route: Router,
    private depService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.idDep = this.routeActive.snapshot.params['id'];
    this.depService.getDepById(this.idDep).subscribe(
      dataDep => {
        this.departamentos = dataDep;
        this.totalPages = new Array(dataDep['totalPages']);
        
      });
    this.getAllAreas();
  }

  
  private getAllAreas(){
    this.areaService.getAreasById(this.idDep).subscribe(
      data => {
        this.areas = data;
        this.totalPages = new Array(data['totalPages']);
      });
  }

  onSubmit() {
    this.areaService.createArea(this.idDep, this.area).subscribe(
      data => {
        this.alert = true;
        this.getAllAreas();
      },
      error => console.log(error));
  }

  updateArea(idArea: number) {
    this.route.navigate(['/maestro/organizacion/areas/edit', idArea]);
  }

  deleteArea(idArea: number) {
    this.areaService.deleteArea(this.idDep, idArea).subscribe(data => {
      this.getAllAreas()
    });
  }

  closeAlert(){
    this.alert = false;
  }
}
