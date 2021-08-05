import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, retry, catchError} from 'rxjs/operators'
import { Proveedor } from '../models/proveedor';
import { DireccionTercero } from '../models/direccionTercero';
import { ContactoTercero } from '../models/contactoTercero';
import { CuentaTercero } from '../models/cuentaTercero';
import {District} from 'ubigeos';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  proveedorURL = "http://localhost:1321/proveedores";

  constructor(private httpClient: HttpClient) { } 

  /* LIST SIMPLE*/
  getDirecciones(): Observable<any>{
    return this.httpClient.get(this.proveedorURL + '/listDireccion')
  }
  
  /* LIST SIMPLE*/
  getContactos(): Observable<any>{
    return this.httpClient.get(this.proveedorURL + '/listContacto')
  }

  /* LIST SIMPLE*/
  getCuentas(): Observable<any>{
    return this.httpClient.get(this.proveedorURL + '/listCuenta')
  }

  /* LIST SIMPLE*/
  getProveedores(): Observable<any>{
    return this.httpClient.get(this.proveedorURL + '/listProveedor')
  }

  /* LIST WITH PAGE*/
  getListAllProveedor(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.proveedorURL}/listProveedorWithPage?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  /* DETAIL */
  getProveedorById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.proveedorURL}/detail/${id}`);
  }
  
  //NO SE USA AUN
  getProveedorByRuc(ruc: string): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.proveedorURL + `detailruc/${ruc}`);
  }

  /* GENERAR CODIGO */
  getCodigo(): Observable<any> {
    return this.httpClient.get(`${this.proveedorURL}/generateID`).pipe(
      map((response:any) => response.identificador as number)
    );
  }


/*
  getDireccionesByIdProv(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/detail/${id}/direcciones`);
  }
  getContactosByIdProv(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/detail/${id}/contactos`);
  }
  getCuentasByIdProv(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.productoURL}/detail/${id}/cuentas`);
  }

   CREATE 
  createProveedor(proveedor: Proveedor, direccion: DireccionTercero, contacto: ContactoTercero, cuenta: CuentaTercero): Observable<any> {
    return this.httpClient.post(`${this.productoURL}/create`, {proveedor, direccion, contacto, cuenta});
  }
  */

  /* CREATE */
  createProveedor(proveedor: Proveedor, direccion: DireccionTercero[], contacto: ContactoTercero[], cuenta: CuentaTercero[]): Observable<any> {
    for(let i=0; i<direccion.length; i++) {
      if(direccion[i].pais === "Peru") {
          direccion[i].ubigeo = District.instance(direccion[i].distrito).getCode();
      }
    }
    
    return this.httpClient.post(`${this.proveedorURL}/create`, {proveedor, direccion, contacto, cuenta}, {headers: this.httpHeaders})
    .pipe(
      map( (response:any) => response.proveedor as Proveedor),
      retry(1),
      catchError(this.handleError)
    );
  }

  /* UPDATE */
  updateProveedor(id:number, proveedor: Proveedor, direccion: DireccionTercero[], contacto: ContactoTercero[], cuenta: CuentaTercero[]): Observable<any> {
    for(let i=0; i<direccion.length; i++) {
      if(direccion[i].pais === "Peru") {
          direccion[i].ubigeo = District.instance(direccion[i].distrito).getCode();
      }else {
        direccion[i].departamento='';
        direccion[i].provincia='';
        direccion[i].distrito='';
        direccion[i].ubigeo='';
      }
    }
    return this.httpClient.put<any>(`${this.proveedorURL}/update/${id}`, {proveedor, direccion, contacto, cuenta}, {headers: this.httpHeaders});
  }

  /* DELETE */
  deleteProveedor(id: number): Observable<any> {
    return this.httpClient.delete(`${this.proveedorURL}/delete/${id}`);
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
