import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaBancariaService {

  cuentaURL = "http://localhost:1321/cuentaBancaria/";

  constructor(private httpClient: HttpClient) { } 

  public getAllCuentas(): Observable<any>{
    return this.httpClient.get(this.cuentaURL + 'list')
  }

  public saveCuenta (cuenta: any): Observable<any>{
    return this.httpClient.post(this.cuentaURL + 'create', cuenta)
  }

  public deleteCuenta (id: number): Observable<any>{
    return this.httpClient.delete(this.cuentaURL + 'delete/'+id)
  }
}

