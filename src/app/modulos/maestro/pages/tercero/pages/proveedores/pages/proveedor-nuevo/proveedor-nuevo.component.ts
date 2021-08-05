import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProveedorService } from 'src/app/modulos/maestro/pages/tercero/services/proveedor.service';
import { Proveedor } from '../../../../models/proveedor';

import { DireccionTercero } from '../../../../models/direccionTercero';
import { ContactoTercero } from '../../../../models/contactoTercero';
import { CuentaTercero } from '../../../../models/cuentaTercero';

import { Pais, PaisGroup, PAISGROUPS } from 'src/app/interfaces/pais.data';
import { DataUbigeoI } from 'src/app/interfaces/ubigeo.data';
import { Region, District, Province }  from 'ubigeos';

@Component({
  selector: 'app-proveedor-nuevo',
  templateUrl: './proveedor-nuevo.component.html',
  styleUrls: ['./proveedor-nuevo.component.css']
})
export class ProveedorNuevoComponent implements OnInit, OnDestroy {
  
  proveedor: Proveedor = new Proveedor();
  direccion : DireccionTercero[] = [{
    id:null,
    domicilio:'', 
    pais:'',
    departamento:'',
    provincia:'',
    distrito:'',
    ubigeo:'',
    proveedorId: null,
    clienteId: null,
  }];
  contacto: ContactoTercero[] = [{
    id: null,
    nombre: '',
    correo: '',
    cargo: '',
    telefono: '',
    proveedorId: null,
    clienteId: null,
  }];
  cuenta: CuentaTercero[] = [{
    id: null,
    num: '',
    cci: '',
    moneda: '',
    entidad: '',
    tipoCuenta: '',
    proveedorId: null
  }];

  constructor( 
    private router: Router,
    private proveedorService: ProveedorService
  ) { }
 
  ngOnInit(): void {
    //Codigo Generator
    this.proveedorService.getCodigo().subscribe(
      identificador => 
          this.proveedor.codigo = identificador+1 < 10 ? "PRV-000"+(identificador+1) :
          identificador+1 < 100 ? "PRV-00"+(identificador+1) : 
          identificador+1 < 1000 ? "PRV-0"+(identificador+1) : 
          (identificador+1).toString() 
    );
    //Cargar la lista de paises
    this.filteredPaisGroups.next(this.copyPaisGroups(this.paisGroups));
    //Funcion para cambio de valor en el campo de busqueda - paises 
    this.paisGroupsFilterCtrl.valueChanges
      .pipe(
        takeUntil(this._onDestroy)
      )
      .subscribe(() => {
        this.filterPaisGroups();
      });
     
    //Select dependency from departamentos
    for (let i=1; i<=25; i++) {
    if(i<10) {
      this.depa[i] = Region.instance(`0${i}`);
    }else {
      this.depa[i] = Region.instance(`${i}`);
      }
    }
    this.depa = this.depa.filter(dep => dep != null);
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  
  /*----- CREATE PROVEEDOR -----*/
  onCreate(): void {
    this.proveedorService.createProveedor(this.proveedor, this.direccion, this.contacto, this.cuenta).subscribe(
     data => {
       this.router.navigate(['/maestro/tercero/proveedores/list']);
     },
     err => {
         console.log(err)
     });
  }

  /*----- SELECT CASCADE UBIGEO  -----*/
  protected paisGroups: PaisGroup[] = PAISGROUPS;

  public depa: Region[] = [];
  public prov!: Province[] | null;
  public dist!: District[] | null;

  public ubigeoGroups: DataUbigeoI[] = [{
    pais_groups: [],
    depa_groups: [],
    prov_groups: null,
    dist_groups: null,
    ubigeo: "",
    show: false,
  }]

  /* control for the selected pais for option groups */
  public paisGroupsCtrl: FormControl = new FormControl();
  /* control for the MatSelect filter keyword for option groups */
  public paisGroupsFilterCtrl: FormControl = new FormControl();
  /* list of pais groups filtered by search keyword for option groups */
  public filteredPaisGroups: ReplaySubject<PaisGroup[]> = new ReplaySubject<PaisGroup[]>(1);
  /* Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  /* busqueda de paises en un campo select */
  protected filterPaisGroups() {
    if (!this.paisGroups) {
      return;
    }
    // get the search keyword
    let search = this.paisGroupsFilterCtrl.value;
    const paisGroupsCopy = this.copyPaisGroups(this.paisGroups);
    if (!search) {
      this.filteredPaisGroups.next(paisGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the paises
    this.filteredPaisGroups.next(
      paisGroupsCopy.filter(paisGroup => {
        const showPaisGroup = paisGroup.letra.toLowerCase().indexOf(search) > -1;
        if (!showPaisGroup) {
          paisGroup.paises = paisGroup.paises.filter((pais: { pa: string; }) => pais.pa.toLowerCase().indexOf(search) > -1);
        }
        return paisGroup.paises.length > 0;
      })
    );
  }
  protected copyPaisGroups(paisGroups: PaisGroup[]) {
    const paisGroupsCopy: { letra: string; paises: Pais[]; }[] = [];
    paisGroups.forEach(paisGroup => {
      paisGroupsCopy.push({
        letra: paisGroup.letra,
        paises: paisGroup.paises.slice()
      });
    });
    return paisGroupsCopy;
  }

  /* busqueda de ubigeo */
  onSelectDepartamento(id:any,i:number):void {
    if(id === "Peru") {
      this.ubigeoGroups[i].show = true;
    }else {
      this.ubigeoGroups[i].show = false;
      this.direccion[i].departamento = '';
      this.ubigeoGroups[i].prov_groups = null;
      this.ubigeoGroups[i].dist_groups = null;
      this.ubigeoGroups[i].ubigeo = null;
    }
  }
  onSelectProvincia(id:string,i:number):void {
    if(id) {
      this.ubigeoGroups[i].prov_groups = Region.instance(id).getProvincies().filter(provincia => provincia != null);
      this.ubigeoGroups[i].dist_groups = null;
      this.ubigeoGroups[i].ubigeo = null;
    }
  }
  onSelectDistrito(id:string,i:number):void {
    if(id) {
      this.ubigeoGroups[i].dist_groups = Province.instance(id).getDistricts().filter(distrito => distrito != null);
      this.ubigeoGroups[i].ubigeo = null
    }
  }

  /* ubigeo generator */
  obtenerUbigeo(id:string,i:number):void {
    this.ubigeoGroups[i].ubigeo = id;
  }

  /*-----  DIRECCION ACTION -----*/ 
  addDireccion(Entity:any){
    this.direccion.push({
      id:null,
      domicilio:'', 
      pais:'',
      departamento:'',
      provincia:'',
      distrito:'',
      ubigeo:'',
      proveedorId: null,
      clienteId: null,
    });
    this.ubigeoGroups.push({
      pais_groups: [],
      depa_groups: [],
      prov_groups: null,
      dist_groups: null,
      ubigeo: "",
      show: false,
    });
  }
  delDireccion(id:any){
    this.direccion.splice(id, 1);
    this.ubigeoGroups.splice(id, 1);
  }

  /*-----  CONTACTO ACTION -----*/
  addContacto(Entity:any){
    this.contacto.push({
      id: null,
      nombre: '',
      correo: '',
      cargo: '',
      telefono: '',
      proveedorId: null,
      clienteId: null,
    });
  }
  delContacto(id:any){
    this.contacto.splice(id, 1);
  }

  /*-----  CUENTA ACTION -----*/
  addCuenta(Entity:any){
    this.cuenta.push({
      id: null,
      num: '',
      cci: '',
      moneda: '',
      entidad: '',
      tipoCuenta: '',
      proveedorId: null,
    });
  }
  delCuenta(id:any){
    this.cuenta.splice(id, 1);
  }
}


/* 
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
  --
  <!--
      <p>
        Selected Bank: {{paisGroupsCtrl.value?.pa}}
      </p>-- end-ngFor-->

 */
