import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/maestro/models/proveedor';
import { ProveedorService } from 'src/app/maestro/services/tercero/proveedor.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  codigo = '';
  ruc: number = null!;
  razonSocial = '';
  fechaInicio: Date = null!;
  rubroActividad = '';
  direccion = '';
  telefono: number = null!;
  correo = '';

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
                                    this.razonSocial, 
                                    this.fechaInicio, 
                                    this.rubroActividad, 
                                    this.direccion, 
                                    this.telefono, 
                                    this.correo);
    this.proveedorService.save(proveedor).subscribe(
      data=>{
        this.toastr.success('Producto creado!', 'OK!', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/maestro/tercero/listar']);
      },
      err=>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, 
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/maestro/tercero/listar']);
      }
    )
  }
}
