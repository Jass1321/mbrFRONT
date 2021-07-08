import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, retry, catchError} from 'rxjs/operators'
import { Proveedor } from '../models/proveedor';
import { DireccionTercero } from '../models/direccionTercero';
import { ContactoTercero } from '../models/contactoTercero';
import { CuentaTercero } from '../models/cuentaTercero';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  productoURL = "http://localhost:1321/proveedores";

  constructor(private httpClient: HttpClient) { } 

  /* LIST SIMPLE*/
  getDirecciones(): Observable<any>{
    return this.httpClient.get(this.productoURL + '/listDireccion')
  }
  
  /* LIST SIMPLE*/
  getContactos(): Observable<any>{
    return this.httpClient.get(this.productoURL + '/listContacto')
  }

  /* LIST SIMPLE*/
  getCuentas(): Observable<any>{
    return this.httpClient.get(this.productoURL + '/listCuenta')
  }

  /* LIST SIMPLE*/
  getProveedores(): Observable<any>{
    return this.httpClient.get(this.productoURL + '/listSelectProveedor')
  }

  /* GENERAR CODIGO  
  getCodigo(): Observable<any> {
    return this.httpClient.get(`${this.productoURL}/listSelectProveedor`).pipe(
      map((response:any) => response.identificador as number)
    );
  }
 */

  /* LIST WITH PAGE*/
  getListAllProveedor(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/listProveedor?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  /* DETAIL */
  getProveedorById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/detail/${id}`);
  }
  
  //NO SE USA AUN
  getProveedorByRuc(ruc: string): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.productoURL + `detailruc/${ruc}`);
  }
  getDireccionesByIdProv(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/detail/${id}/direcciones`);
  }
  getContactosByIdProv(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/detail/${id}/contactos`);
  }
  getCuentasByIdProv(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/detail/${id}/cuentas`);
  }

  /* CREATE 
  createProveedor(proveedor: Proveedor, direccion: DireccionTercero, contacto: ContactoTercero, cuenta: CuentaTercero): Observable<any> {
    return this.httpClient.post(`${this.productoURL}/create`, {proveedor, direccion, contacto, cuenta});
  }
  */

  /* CREATE */
  createProveedor(proveedor: Proveedor, direccion: DireccionTercero[]): Observable<any> {
    return this.httpClient.post(`${this.productoURL}/create`, {proveedor, direccion})
    
  }

  /* UPDATE */
  updateProveedor(id:number, proveedor: Proveedor, direccion: DireccionTercero, contacto: ContactoTercero, cuenta: CuentaTercero): Observable<any> {
    return this.httpClient.put<any>(`${this.productoURL}/update/${id}`, {proveedor, direccion, contacto, cuenta});
  }

  /* DELETE */
  deleteProveedor(id: number): Observable<any> {
    return this.httpClient.delete(`${this.productoURL}/delete/${id}`);
  }
  
    //Error handling
    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }

}
