import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./cliente-listado.component.css']
})
export class ClienteListadoComponent implements OnInit {

  idCli!: number;
  clientes!: Array<any>;
  totalPages!: Array<number>;

  //BUSQUEDA 
  filterCli='';

  //PAGINACION
  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;

  constructor(
    private route: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getAllClientes();
  }

  //------------ PROVEEDOR C-R-U-D ------------
  //CREATE PROV
  openNewCli() {
    this.route.navigate(['/maestro/tercero/clientes/add']);
  }
  //READ PROV
  public getAllClientes(): void{
    this.clienteService.getListAllCliente(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.clientes = data.content;
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
  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.getAllClientes();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.getAllClientes();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.getAllClientes();
  }

  //DETAIL PROV
  openDetailCli(id: number) {
    this.route.navigate(['/maestro/tercero/clientes/detail',id]);
  }

  //UPDATE PROV
  openUpdateCli(id: number) {
    this.route.navigate(['/maestro/tercero/clientes/edit',id]);
  }

  //DELETE PROV
  deleteCli(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sip',
      cancelButtonText: 'Nops'
    }).then((result) => {
      if (result.value) {
        this.clienteService.deleteCliente(id).subscribe(res => this.getAllClientes());
        Swal.fire(
          'OK',
          'Producto eliminado',
          'success'
        );
      }else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Producto a salvo',
          'error'
        );
      }
    });
  }

  //FILTRO POR ORDEN Y CLASIFICACION 
  sort(): void {
    this.asc = !this.asc;
    this.getAllClientes();
  }

  setOrder(order: string): void {
    this.order = order;
    this.getAllClientes();
  }

 

}
