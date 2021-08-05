import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Cliente } from '../models/cliente';
import { ContactoTercero } from '../models/contactoTercero';
import { DireccionTercero } from '../models/direccionTercero';
import { District} from 'ubigeos';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  clienteURL = "http://localhost:1321/clientes";

  constructor(private httpClient: HttpClient) { }

  /* LIST SIMPLE*/
  getProveedores(): Observable<any>{
    return this.httpClient.get(this.clienteURL + '/listProveedor')
  }

  /* LIST WITH PAGE*/
  getListAllCliente(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.clienteURL}/listClienteWithPage?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  /* DETAIL */
  getClienteById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.clienteURL}/detail/${id}`);
  }
  
  //NO SE USA AUN
  getClienteByRuc(ruc: string): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteURL + `detailruc/${ruc}`);
  }

  /* GENERAR CODIGO */
  getCodigo(): Observable<any> {
    return this.httpClient.get(`${this.clienteURL}/generateID`).pipe(
      map((response:any) => response.identificador as number)
    );
  }

  /* CREATE */
  createCliente(cliente: Cliente, direccion: DireccionTercero[], contacto: ContactoTercero[]): Observable<any> {
    for(let i=0; i<direccion.length; i++) {
      if(direccion[i].pais === "Peru") {
          direccion[i].ubigeo = District.instance(direccion[i].distrito).getCode();
      }
    }
    
    return this.httpClient.post(`${this.clienteURL}/create`, {cliente, direccion, contacto}, {headers: this.httpHeaders})
    .pipe(
      map( (response:any) => response.proveedor as Cliente),
      retry(1),
      catchError(this.handleError)
    );
  }

  /* UPDATE */
  updateCliente(id:number, cliente: Cliente, direccion: DireccionTercero[], contacto: ContactoTercero[]): Observable<any> {
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
    return this.httpClient.put<any>(`${this.clienteURL}/update/${id}`, {cliente, direccion, contacto}, {headers: this.httpHeaders});
  }

  /* DELETE */
  deleteCliente(id: number): Observable<any> {
    return this.httpClient.delete(`${this.clienteURL}/delete/${id}`);
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

