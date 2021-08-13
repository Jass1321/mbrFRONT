import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BusquedaProducto } from 'src/app/modulos/almacen/pages/stock/models/busquedaProducto';
import { FamiliaService } from 'src/app/modulos/maestro/pages/catalogo/services/familia.service';
import { ProductoService } from '../../../services/producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: any[] = [];
  familias: any[] = [];

  busqueda: BusquedaProducto = { 
    codigo: '',
    familia: '',
    subfamilia: '',
    nombre: '',
    marca: '',
    color: '',
    medida: '',
    precioDesde: null!,
    precioHasta: null!,
    estado: '',
  }

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private familiaService: FamiliaService
  ){}
 
  ngOnInit(){
    this.listaFamilias();
    this.listaProductos();
  }

  listaFamilias(): void{
    this.familiaService.getFamilias().subscribe(
      data => {
        this.familias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  listaProductos(): void {
    this.productoService.filter(this.busqueda).subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  //Busqueda
  familiaElegida: any = null;

  //----Familia - Subfamilia--------
  onChangeFamilia(): void{
    if(this.familiaElegida){
      this.busqueda.familia = this.familiaElegida.nombre;
    }else{
      this.busqueda.familia = '';
      this.busqueda.subfamilia = '';
    }
    this.listaProductos;
  }
  //----Codigo - Descripcion - Marca--------
  clearCodigo(): void {
    this.busqueda.codigo = '';
    this.listaProductos();
  }
  clearDescripcion(): void {
    this.busqueda.nombre = '';
    this.listaProductos();
  }
  clearMarca(): void {
    this.busqueda.marca = '';
    this.listaProductos();
  }
  //---Precio desde->hasta------
  clearPrecioDesde(): void {
    this.busqueda.precioDesde = null!;
    this.listaProductos();
  }

  clearPrecioHasta(): void {
    this.busqueda.precioHasta = null!;
    this.listaProductos();
  }

  clear(): void {
    this.familiaElegida = null;
    this.busqueda.familia = '';
    this.busqueda.subfamilia = '';
    this.busqueda.codigo = '';
    this.busqueda.nombre = '';
    this.busqueda.marca = '';
    this.busqueda.estado = '';
    this.busqueda.color = '';
    this.busqueda.medida = '';
    this.busqueda.precioDesde = null!;
    this.busqueda.precioHasta = null!;
    this.listaProductos();
  }

  
}
