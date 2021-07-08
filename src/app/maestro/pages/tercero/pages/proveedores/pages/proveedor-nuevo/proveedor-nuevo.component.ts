import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../../../../models/proveedor';
import { ProveedorService } from 'src/app/maestro/pages/tercero/services/proveedor.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DireccionTercero } from '../../../../models/direccionTercero';
import { ContactoTercero } from '../../../../models/contactoTercero';
import { CuentaTercero } from '../../../../models/cuentaTercero';

@Component({
  selector: 'app-proveedor-nuevo',
  templateUrl: './proveedor-nuevo.component.html',
  styleUrls: ['./proveedor-nuevo.component.css']
})
export class ProveedorNuevoComponent implements OnInit {
  
  public proveedor: Proveedor = new Proveedor();

  
  contacto: ContactoTercero = new ContactoTercero();
  cuenta: CuentaTercero = new CuentaTercero();
 /* 
  proveedorForm!: FormGroup;
  direccionForm!: FormGroup;
  contactoForm!: FormGroup;
  cuentaForm!: FormGroup;
 */
  proveedorForm = new FormGroup({
    id:             new FormControl(''),
    codigo:         new FormControl(''),
    ruc:            new FormControl('', Validators.required),
    fechaInicio:    new FormControl('', Validators.required),
    razonSocial:    new FormControl('', Validators.required),
    rubroActividad: new FormControl('', Validators.required),
    comentario:     new FormControl(''),
    direccion: new FormGroup({
      domicilio: new FormControl(''),
      pais: new FormControl(''),
      departamento: new FormControl(''),
      provincia: new FormControl('')
    })
  });

  constructor( 
    public fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private proveedorService: ProveedorService,
  ) { }

  ngOnInit(): void {
    
    /*
    this.proveedorForm = this.fb.group({
      id : [''],
      codigo: [''],
      ruc: ['', Validators.required,],
      fechaInicio: ['', Validators.required],
      razonSocial: ['', Validators.required],
      rubroActividad: ['', Validators.required],
      comentario: [''],
    });

    this.direccionForm = this.fb.group({
      id : [''],
      domicilio: ['', Validators.required],
      pais: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      ubigeo: ['', Validators.required]
    });
    this.contactoForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
    });
    this.cuentaForm = this.fb.group({
      id : [''],
      num: ['', Validators.required],
      cci: ['', Validators.required],
      moneda: ['', Validators.required],
      entidad: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
    });
    
     this.proveedorService.getCodigo().subscribe(
      identificador => 
          this.proveedor.codigo = identificador+1 < 10 ? "PR000"+(identificador+1) :
          identificador+1 < 100 ? "PR00"+(identificador+1) : 
          identificador+1 < 1000 ? "PR0"+(identificador+1) : 
          (identificador+1).toString() 
    ); */
  }

  public direccion : DireccionTercero[] = [{
      id:0,
      domicilio:'', 
      pais:'',
      departamento:'',
      provincia:'',
      distrito:'',
      ubigeo:'',
  }];
 
  onCreate(): void {
     this.proveedorService.createProveedor(this.proveedor, this.direccion).subscribe(
      data => {
        this.router.navigate(['/maestro/tercero/proveedores/list']);
      },
      err => {
          console.log(err)
      });
  }

  

}
