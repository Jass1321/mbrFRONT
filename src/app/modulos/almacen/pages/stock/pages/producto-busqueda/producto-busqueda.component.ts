import { Component, OnInit } from '@angular/core';
import { BusquedaProducto } from '../../models/busquedaProducto';

@Component({
  selector: 'app-producto-busqueda',
  templateUrl: './producto-busqueda.component.html',
  styleUrls: ['./producto-busqueda.component.css']
})
export class ProductoBusquedaComponent implements OnInit {

  
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
  ) { }

  ngOnInit(): void {
  }

}
