import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CuentaBancaria } from '../models/cuentaBancaria';

@Injectable({
  providedIn: 'root'
})
export class CuentaBancariaService {

  cuentaURL = "http://localhost:1321/bancos";

  constructor(private httpClient: HttpClient) { } 

   /* LIST */
   getListAllCuentaBancarias(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.cuentaURL}/listCuentaBancaria?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  /* LIST CUENTA BY BANCO ID*/
  getCuentasById(id: number ): Observable<any> {
    return this.httpClient.get<any>(`${this.cuentaURL}/listBanco/${id}/cuentas`);
  }

  /* DETAIL */
  getCuentaIdByIdDep(idCuenta:number, idBanco:number):Observable<any>{
    return this.httpClient.get<any>(`${this.cuentaURL}/listBanco//${idBanco}/areas/${idCuenta}`);
  }

  /*  CREATE BY ID BANCO */
  createCuenta(id: number, cuentaBancaria: CuentaBancaria): Observable<any> {
    return this.httpClient.post(`${this.cuentaURL}/create/${id}/cuentas`, cuentaBancaria);
  }

  /*  CREATE CUENTA WITH SELECT BANCO */
  public saveCuenta (cuenta: any): Observable<any>{
    return this.httpClient.post(this.cuentaURL + '/save/cuentas', cuenta)
  }

  /* DELETE */
  deleteCuenta(idBanco: number,idCuenta: number): Observable<Object> {
    return this.httpClient.delete(`${this.cuentaURL}/delete/${idBanco}/cuentas/${idCuenta}`);
  }

  /*  DELETE CUENTA WITH SELECT BANCO */
  public removeCuenta (id: number): Observable<any>{
    return this.httpClient.delete(this.cuentaURL + '/delete/cuentas/'+id)
  } 
}

