import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from '../../../../models/departamento';
import { AreaService } from '../../../../services/area.service';
import { DepartamentoService } from '../../../../services/departamento.service';
import { Area } from '../../../../models/area';

@Component({
  selector: 'app-area-listado',
  templateUrl: './area-listado.component.html',
  styleUrls: ['./area-listado.component.css']
})
export class AreaListadoComponent implements OnInit {

  idDep!: number;
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
    private areaService: AreaService,
    private routeActive: ActivatedRoute,
    private route: Router,
    private depService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.getAllAreas();
  }

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


  //PAGINACION
  sort(): void {
    this.asc = !this.asc;
    this.getAllAreas();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllAreas();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllAreas();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.getAllAreas();
  }
  
  setOrder(order: string): void {
    this.order = order;
    this.getAllAreas();
  }

}
