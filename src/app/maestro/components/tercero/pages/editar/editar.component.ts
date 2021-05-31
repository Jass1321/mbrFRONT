import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/maestro/models/proveedor';
import { ProveedorService } from 'src/app/maestro/services/tercero/proveedor.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  
  proveedor: Proveedor = null!;

  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    const id = this.activatedRoute.snapshot.params.id;
    this.proveedorService.detail(+id).subscribe(
      data => {
        this.proveedor =data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/maestro/tercero/listar']);
      }
    );
  }

  

  Actualizar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.proveedorService.update(this.proveedor).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/maestro/tercero/listar']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/maestro/tercero/listar']);
      }
    );
  }

}
