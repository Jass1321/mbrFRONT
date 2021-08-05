import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../models/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  bancoURL = "http://localhost:1321/bancos";

  constructor(private httpClient: HttpClient) { } 

  /* LIST SIMPLE*/
  public getBancos(): Observable<any>{
    return this.httpClient.get(this.bancoURL + '/listSelectBanco')
  }

  /* LIST WITH PAGE*/
  getListAllBanco(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.bancoURL}/listBanco?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  /* DETAIL */
  getBancoById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.bancoURL}/listBanco/${id}`);
  }
  
  /* CREATE */
  createBanco(banco: Banco): Observable<any> {
    return this.httpClient.post(`${this.bancoURL}/create`, banco);
  }

  /* DELETE */
  deleteBanco(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.bancoURL}/delete/${id}`);
  }
}
