import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/modulos/maestro/pages/catalogo/services/producto.service';
import { BusquedaProducto } from 'src/app/modulos/maestro/pages/catalogo/models/busqueda.producto';

@Component({
  selector: 'app-biene-listado',
  templateUrl: './biene-listado.component.html',
  styleUrls: ['./biene-listado.component.css']
})
export class BieneListadoComponent implements OnInit {

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
    private productoService: ProductoService
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
