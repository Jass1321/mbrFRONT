import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  productoURL = "http://localhost:1321/proveedor/";

  constructor(private httpClient: HttpClient) { } 

  public lista(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(this.productoURL + 'list?' + `page=${page}&size=${size}&order=${order}&asc=${asc}` );
  }

  public detail(id: number) {
    return this.httpClient.get<Proveedor>(this.productoURL + 'detail/'+id);
  }

  //OPCIONAL NO SE USA aun
  public detailName(ruc: number): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.productoURL + `detailruc/${ruc}`);
  }

  public save(proveedor: Proveedor): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', proveedor);
  }

  public update( proveedor: Proveedor): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + 'update/'+proveedor.id, proveedor);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
}