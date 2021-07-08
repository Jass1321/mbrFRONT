import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedorService } from 'src/app/maestro/pages/tercero/services/proveedor.service';
import { Proveedor } from '../../../../models/proveedor';

@Component({
  selector: 'app-proveedor-editado',
  templateUrl: './proveedor-editado.component.html',
  styleUrls: ['./proveedor-editado.component.css']
})
export class ProveedorEditadoComponent implements OnInit {

  idProv!: number;
  proveedorForm!: FormGroup;
  direccionForm!: FormGroup;
  contactoForm!: FormGroup;
  cuentaForm!: FormGroup;

  proveedor!: Proveedor;

  constructor(
    public fb: FormBuilder,
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idProv = this.activatedRoute.snapshot.params['id'];

    this.proveedorForm = this.fb.group({
      id : [''],
      codigo: ['', Validators.required],
      ruc: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      razonSocial: ['', Validators.required],
      rubroActividad: ['', Validators.required],
      comentario: ['', Validators.required]
    });;
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

    this.proveedorService.getProveedorById(this.idProv).subscribe(
      data => {
        this.proveedor = data;
    });
  }

  onUpdate(): void {
    this.proveedorService.updateProveedor(this.idProv, this.proveedorForm.value, this.direccionForm.value, this.contactoForm.value, this.cuentaForm.value).subscribe(
      data => {
         this.router.navigate(['/maestro/tercero/proveedores/list']);
      }, 
      error =>{
        console.log(error);
      });
  }

  
}
