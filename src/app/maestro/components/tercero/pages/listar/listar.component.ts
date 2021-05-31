import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { Proveedor } from 'src/app/maestro/models/proveedor';
import { ProveedorService } from 'src/app/maestro/services/tercero/proveedor.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  proveedores!: Proveedor[];

  constructor(
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
    ){ }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void{
    this.proveedorService.lista().subscribe(
      data => {
        this.proveedores = data;
      },
      err => {
        console.log(err);
      }

    )
  }


  borrar(id: any){
    // alert('borrar el ' + id);  Para probar si funciona
    this.proveedorService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  
          positionClass: 'toast-top-center',
        });
      }
    ); 
  }

}
