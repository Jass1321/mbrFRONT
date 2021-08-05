import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedorService } from 'src/app/modulos/maestro/pages/tercero/services/proveedor.service';
import { ContactoTercero } from '../../../../models/contactoTercero';
import { CuentaTercero } from '../../../../models/cuentaTercero';
import { DireccionTercero } from '../../../../models/direccionTercero';
import { Proveedor } from '../../../../models/proveedor';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetalleComponent implements OnInit {
  
  idProv!: number;
  public proveedor: Proveedor = new Proveedor();

  public direccion : DireccionTercero[] = [{
    id:0,
    domicilio:'', 
    pais:'',
    departamento:'',
    provincia:'',
    distrito:'',
    ubigeo:'',
    proveedorId: null,
    clienteId: null,
  }];

  public contacto: ContactoTercero[] = [{
    id: 0,
    nombre: '',
    correo: '',
    cargo: '',
    telefono: '',
    proveedorId: null,
    clienteId: null,
  }];

  public cuenta: CuentaTercero[] = [{
    id: 0,
    num: '',
    cci: '',
    moneda: '',
    entidad: '',
    tipoCuenta: '',
    proveedorId: null
  }];

  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idProv = this.activatedRoute.snapshot.params['id'];

    this.detailProv();
  }

  detailProv(): void {
    this.proveedorService.getProveedorById(this.idProv).subscribe(
      json => {
        this.proveedor = json.proveedor;
        this.direccion = json.direccion;
        this.contacto = json.contacto;
        this.cuenta = json.cuenta;
        console.log(json);
      });
  }

}
