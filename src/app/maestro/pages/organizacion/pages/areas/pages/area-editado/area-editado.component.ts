import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../../../../models/area';
import { AreaService } from '../../../../services/area.service';
import { DepartamentoService } from '../../../../services/departamento.service';

@Component({
  selector: 'app-area-editado',
  templateUrl: './area-editado.component.html',
  styleUrls: ['./area-editado.component.css']
})
export class AreaEditadoComponent implements OnInit {

  idDep!: number;
  idArea!: number;
  alert: boolean = false;

  area: Area = new Area();

  constructor(
    private areaService: AreaService,
    private routeActive: ActivatedRoute,
    private route: Router,
    private depService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.idDep = this.routeActive.snapshot.params['idArea'];
    this.idArea = this.routeActive.snapshot.params['idDep'];
    this.areaService.getAreaIdByIdDep(this.idArea,this.idDep).subscribe(
      data => {
        this.area = data;
      },
      error => console.log(error));
  }

  onSubmit() {
    this.areaService.updateArea(this.idDep,this.idArea, this.area).subscribe(
      data => {
        this.alert = true;
      },
      error => console.log(error));
  }

  closeAlert(){
    this.alert = false;
  }

  volver(): void {
    this.route.navigate(['/maestro/organizacion/areas/list']);
  }

}
