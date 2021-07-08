import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProveedorService } from 'src/app/maestro/pages/tercero/services/proveedor.service';
import { ProveedorNuevoComponent } from '../proveedor-nuevo/proveedor-nuevo.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedor-listado',
  templateUrl: './proveedor-listado.component.html',
  styleUrls: ['./proveedor-listado.component.css']
})
export class ProveedorListadoComponent implements OnInit {

  idProv!: number;
  proveedores!: Array<any>;

  totalPages!: Array<number>;
  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private route: Router,
    private proveedorService: ProveedorService
    ){ }

  ngOnInit() {
   this.getAllProveedores();
  }

  //------------ PROVEEDOR C-R-U-D ------------
  //CREATE PROV
  openNewProv() {
    this.route.navigate(['/maestro/tercero/proveedores/add']);
  }
  //READ PROV
  private getAllProveedores(): void{
    this.proveedorService.getListAllProveedor(this.page, this.size, this.order, this.asc).subscribe(
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

  //PAGINACION
  sort(): void {
    this.asc = !this.asc;
    this.getAllProveedores();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllProveedores();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllProveedores();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.getAllProveedores();
  }
  
  setOrder(order: string): void {
    this.order = order;
    this.getAllProveedores();
  }

  //DETAIL PROV
  openDetailProv(id: number) {
    this.route.navigate(['/maestro/tercero/proveedores/detail',id]);
  }

  //UPDATE PROV
  openUpdateProv(id: number) {
    this.route.navigate(['/maestro/tercero/proveedores/edit',id]);
  }

  //DELETE PROV
  deleteProv(id: number) {
    this.proveedorService.deleteProveedor(id).subscribe(
      data => {
        this.getAllProveedores()
      });
  }
}


