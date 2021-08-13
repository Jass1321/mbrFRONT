import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusquedaProducto } from '../pages/stock/models/busquedaProducto';
import { Producto } from '../pages/stock/models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  URL = 'http://localhost:1321/productos';

  constructor(private httpClient: HttpClient) { } 

  filter(busqueda : BusquedaProducto): Observable<any[]>{
    return this.httpClient.post<any[]>(this.URL + '/filter', busqueda);
  }
  
  /* LIST WITH PAGE*/
  getListWithPage(page: number, size: number, order: string, asc: boolean): Observable<any> {
  return this.httpClient.get<any>(`${this.URL}/listProductoWithPage?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
  
  /* DETAIL */
  getById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/detail/${id}`);
  }

  /* CREATE */
  create(producto: Producto): Observable<any> {
    return this.httpClient.post(`${this.URL}/create`, producto);
  }
  
  /* DELETE */
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/delete/${id}`);
  }

}
