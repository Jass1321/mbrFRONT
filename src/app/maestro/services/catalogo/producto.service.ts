import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusquedaProducto } from '../../models/busqueda.producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:1321/';

  constructor(private httpClient: HttpClient) { } 

  familias(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.productoURL + 'familia/list');
  }

  productos(busqueda : BusquedaProducto): Observable<any[]>{
    return this.httpClient.post<any[]>(this.productoURL + 'producto/list', busqueda);
  }
  
}
