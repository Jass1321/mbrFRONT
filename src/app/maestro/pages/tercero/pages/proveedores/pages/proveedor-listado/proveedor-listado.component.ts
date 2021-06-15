import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { ProveedorService } from 'src/app/maestro/pages/tercero/services/proveedor.service';

@Component({
  selector: 'app-proveedor-listado',
  templateUrl: './proveedor-listado.component.html',
  styleUrls: ['./proveedor-listado.component.css']
})
export class ProveedorListadoComponent implements OnInit {

 
  proveedores!: Array<any>;

  totalPages!: Array<number>;
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
    ){ }

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores(): void{
    this.proveedorService.lista(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.proveedores = data.content;
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

  borrar(id: any){
    // alert('borrar el ' + id);  Para probar si funciona
    this.proveedorService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.cargarProveedores();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  
          positionClass: 'toast-top-center',
        });
      }
    ); 
  }

  //PAGINACION
  sort(): void {
    this.asc = !this.asc;
    this.cargarProveedores();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarProveedores();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarProveedores();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.cargarProveedores();
  }
  
  setOrder(order: string): void {
    this.order = order;
    this.cargarProveedores();
  }

 
}
