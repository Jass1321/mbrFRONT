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
  
  idProv!: number;
  
  proveedor!: Proveedor;

  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idProv = this.activatedRoute.snapshot.params['id'];

    this.proveedorService.getProveedorById(this.idProv).subscribe(
      data => {
        this.proveedor = data;
      });

  }

}
