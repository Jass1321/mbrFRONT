import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../../../../services/departamento.service';

@Component({
  selector: 'app-departamento-listado',
  templateUrl: './departamento-listado.component.html',
  styleUrls: ['./departamento-listado.component.css']
})

export class DepartamentoListadoComponent implements OnInit {

  departamentos!: Array<any>;

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
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getAllDepas();
  }

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
    this.route.navigate(['/maestro/organizacion/departamentos/edit', id]);
  }

  deleteDep(id: number) {
    this.depService.deleteDepartamento(id).subscribe(
      data => {
        this.getAllDepas()
      });
  }
  
  //PAGINACION
  sort(): void {
    this.asc = !this.asc;
    this.getAllDepas();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllDepas();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllDepas();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.getAllDepas();
  }
  
  setOrder(order: string): void {
    this.order = order;
    this.getAllDepas();
  }
}
