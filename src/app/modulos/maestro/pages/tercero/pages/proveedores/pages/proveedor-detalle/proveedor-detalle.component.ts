import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProveedorService } from 'src/app/modulos/maestro/pages/tercero/services/proveedor.service';
import { Proveedor } from '../../../../models/proveedor';

import { ContactoTercero } from '../../../../models/contactoTercero';
import { CuentaTercero } from '../../../../models/cuentaTercero';
import { DireccionTercero } from '../../../../models/direccionTercero';

import { Pais, PaisGroup, PAISGROUPS } from 'src/app/interfaces/pais.data';
import { Region, District, Province } from 'ubigeos';
import { DataUbigeoI } from 'src/app/interfaces/ubigeo.data';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetalleComponent implements OnInit {

  idProv!: number;
  proveedor: Proveedor = new Proveedor();

  direccion: DireccionTercero[] = [{
    id: null,
    domicilio: '',
    pais: '',
    departamento: '',
    provincia: '',
    distrito: '',
    ubigeo: '',
    proveedorId: null,
    clienteId: null,
  }];

  contacto: ContactoTercero[] = [{
    id: 0,
    nombre: '',
    correo: '',
    cargo: '',
    telefono: '',
    proveedorId: null,
    clienteId: null,
  }];

  cuenta: CuentaTercero[] = [{
    id: 0,
    num: '',
    cci: '',
    moneda: '',
    entidad: '',
    tipoCuenta: '',
    proveedorId: null
  }];

  ubigeoGroups: DataUbigeoI[] = [{
    pais_groups: [],
    depa_groups: [],
    prov_groups: null,
    dist_groups: null,
    ubigeo: "",
    show: false,
  }]

  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.idProv = this.activatedRoute.snapshot.params['id'];
    this.onDetail();
  }

  onDetail(): void {
    this.proveedorService.getProveedorById(this.idProv).subscribe(
      json => {
        this.proveedor = json.proveedor;
        this.direccion = json.direccion;
        if (this.direccion.length > 1) {
          for (let i = 0; i < this.direccion.length; i++) {
            if (this.direccion[i].pais === "Peru") {
              if (i === 0) {
                this.ubigeoGroups[i] = {
                  pais_groups: [],
                  depa_groups: [],
                  prov_groups: Region.instance(this.direccion[i].departamento).getProvincies(),
                  dist_groups: Province.instance(this.direccion[i].provincia).getDistricts(),
                  ubigeo: "",
                  show: true
                }
              } else {
                this.ubigeoGroups.push({
                  pais_groups: [],
                  depa_groups: [],
                  prov_groups: Region.instance(this.direccion[i].departamento).getProvincies(),
                  dist_groups: Province.instance(this.direccion[i].provincia).getDistricts(),
                  ubigeo: "",
                  show: true
                });
              }
            } else {
              this.ubigeoGroups.push({
                pais_groups: [],
                depa_groups: [],
                prov_groups: null,
                dist_groups: null,
                ubigeo: "",
                show: false
              });
            }
          }
        }
        this.contacto = json.contacto;
        this.cuenta = json.cuenta;
        console.log(json);
      }, error => console.log(error));
  }

}
