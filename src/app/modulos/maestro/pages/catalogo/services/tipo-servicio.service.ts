import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})

export class TipoServicioService {

  URL = "http://localhost:1321/servicios";
  
  constructor(private httpClient: HttpClient) { } 

  /* LIST WITH PAGE*/
  getListWithPage(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listTipoWithPage?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
  
  /* DETAIL */
  getById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/tipo/${id}`);
  }

  /* CREATE */
  create(servicio: Servicio): Observable<any> {
    return this.httpClient.post(`${this.URL}/create`, servicio);
  }
  
  /* DELETE */
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/delete/${id}`);
  }

}
