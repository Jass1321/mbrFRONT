import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/maestro/models/proveedor';
import { ProveedorService } from 'src/app/maestro/services/tercero/proveedor.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


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
        this.router.navigate(['/maestro/tercero/listar']);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/maestro/tercero/listar']);
  }

}
