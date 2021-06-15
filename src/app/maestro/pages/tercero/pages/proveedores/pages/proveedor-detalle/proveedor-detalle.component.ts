import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedorService } from 'src/app/maestro/pages/tercero/services/proveedor.service';
import { Proveedor } from '../../../../models/proveedor';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetalleComponent implements OnInit {

  

  proveedor: Proveedor = null!;
  
  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.proveedorService.detail(+id).subscribe(
      data => {
        this.proveedor =data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/maestro/tercero/proveedores/list']);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/maestro/tercero/proveedores/list']);
  }
}
