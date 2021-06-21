import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../../../../models/proveedor';
import { ProveedorService } from 'src/app/maestro/pages/tercero/services/proveedor.service';

@Component({
  selector: 'app-proveedor-nuevo',
  templateUrl: './proveedor-nuevo.component.html',
  styleUrls: ['./proveedor-nuevo.component.css']
})
export class ProveedorNuevoComponent implements OnInit {
  codigo = '';
  ruc: number = null!;
  nombre = '';
  fechaInicio: Date = null!;
  rubro = '';
  comentario = '';

  constructor( 
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proveedor = new Proveedor(this.codigo, 
                                    this.ruc, 
                                    this.nombre, 
                                    this.fechaInicio, 
                                    this.rubro, 
                                    this.comentario);
    this.proveedorService.save(proveedor).subscribe(
      data=>{
        this.toastr.success('Producto creado!', 'OK!', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      /*   this.router.navigate(['/maestro/tercero/proveedores/list']);
       */},
      err=>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, 
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/maestro/tercero/proveedores/list']);
      }
    )
  }

}
