import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../../services/servicio.service';
import { TipoServicioService } from '../../../../services/tipo-servicio.service';

@Component({
  selector: 'app-tipo-servicio-list',
  templateUrl: './tipo-servicio-list.component.html',
  styleUrls: ['./tipo-servicio-list.component.css']
})
export class TipoServicioListComponent implements OnInit {

  idTipo!: number;

  tipoForm!: FormGroup;
  servForm!: FormGroup;

  tipos!: Array<any>;
  servicios!: Array<any>;

  totalPagesTipo!: Array<number>;
  totalPagesServ!: Array<number>;

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
    private servService: ServicioService,
  ) { }

  ngOnInit(): void {
    this.tipoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required]
    });;

    this.servForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      tipoServicio: ['']
    });;

    this.tipoService.getById(this.idTipo).subscribe(
      data => {
        this.tipos = data;
      });

    this.getAllTipos();
    this.getAllServicios();
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

  /*------------VIEW SERVICIOS BY IPO ID  ------------*/
  viewServicios(id: number) {
    this.route.navigate(['/maestro/catalogo/servicios/detail/servicio', id]);
  }

  //------------SERVICIOS R-U-D------------
  //SAVE  
  onCreateServ(): void {
    this.servService.save(this.servForm.value).subscribe(
      data => {
        this.servForm.reset();
        this.getAllServicios();
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  //READ 
  private getAllServicios() {
    this.servService.getListWithPage(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.servicios = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPagesServ = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  //UPDATE 
  onUpdateServ(servicio: {id:any, nombre: string, tipoServicio: any }) {
    this.servForm.setValue({
      id: servicio.id,
      nombre: servicio.nombre,
      tipoServicio: servicio.tipoServicio
    })
  }
  //DELETE  
  onDeleteServ(id: number) {
    this.servService.remove(id).subscribe(
      data => {
        if (data === true) {
          this.getAllServicios();
        }
      });
  }
  //SEARCH 
  setOrderServ(order: string): void {
    this.order = order;
    this.getAllServicios();
  }
  sortServ(): void {
    this.asc = !this.asc;
    this.getAllServicios();
  }
  //PAGINACION
  rewindServ(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllServicios();
    }
  }
  forwardServ(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllServicios();
    }
  }
  setPageServ(page: number): void {
    this.page = page;
    this.getAllServicios();
  }


}
