import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoServicioService } from '../../../../services/tipo-servicio.service';

@Component({
  selector: 'app-tipo-servicio-detail',
  templateUrl: './tipo-servicio-detail.component.html',
  styleUrls: ['./tipo-servicio-detail.component.css']
})
export class TipoServicioDetailComponent implements OnInit {

  tipoForm!: FormGroup;
  tipos!: Array<any>;
  totalPagesTipo!: Array<number>;

  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private route: Router,
    public fb: FormBuilder,
    private tipoService: TipoServicioService,
  ) { }

  ngOnInit(): void {
    this.tipoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required]
    });;

    this.getAllTipos();
  }

  /*------------ TIPO C-R-U-D ------------*/
  //CREATE 
  onCreateTipo(): void {
    this.tipoService.create(this.tipoForm.value).subscribe(
      data => {
        this.tipoForm.reset();
        this.getAllTipos();
      },
      err => {
        console.log(err)
      }
    )
  }
  //READ 
  private getAllTipos() {
    this.tipoService.getListWithPage(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.tipos = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesTipo = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  //UPDATE
  onUpdateTipo(tipo: { id: any, nombre: string }) {
    this.tipoForm.setValue({
      id: tipo.id,
      nombre: tipo.nombre
    })
  }
  //DELETE 
  onDeleteTipo(id: number) {
    this.tipoService.delete(id).subscribe(
      data => {
        this.getAllTipos()
      });
  }
  //SEARCH FAM
  setOrderTipo(order: string): void {
    this.order = order;
    this.getAllTipos();
  }
  sortTipo(): void {
    this.asc = !this.asc;
    this.getAllTipos();
  }
  //PAGINACION
  rewindTipo(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllTipos();
    }
  }
  forwardTipo(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllTipos();
    }
  }
  setPageTipo(page: number): void {
    this.page = page;
    this.getAllTipos();
  }

  /*------------ BACK LIST GENERAL ------------*/
  backList() {
    this.route.navigate(['/maestro/catalogo/servicios/list']);
  }

}
