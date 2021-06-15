import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BusquedaProducto } from 'src/app/maestro/pages/catalogo/models/busqueda.producto';
import { ProductoService } from 'src/app/maestro/pages/catalogo/services/producto.service';

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
    descripcion: '',
    marca: '',
    color: '',
    medida: '',
    precioDesde: null!,
    precioHasta: null!,
    estado: '',
  }

  constructor(
    private productoService: ProductoService,
    private router: Router
  ){}
 
  ngOnInit(){
    this.listaFamilias();
    this.listaProductos();
  }

  listaFamilias(): void{
    this.productoService.familias().subscribe(
      data => {
        this.familias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  listaProductos(): void {
    this.productoService.productos(this.busqueda).subscribe(
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
    this.busqueda.descripcion = '';
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
    this.busqueda.descripcion = '';
    this.busqueda.marca = '';
    this.busqueda.estado = '';
    this.busqueda.color = '';
    this.busqueda.medida = '';
    this.busqueda.precioDesde = null!;
    this.busqueda.precioHasta = null!;
    this.listaProductos();
  }

  
}
