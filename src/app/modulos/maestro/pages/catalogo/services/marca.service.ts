import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})

export class MarcaService {

  URL = "http://localhost:1321/marcas";

  constructor(private httpClient: HttpClient) { } 

  /* LIST WITH PAGE*/
  getListWithPage(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listMarcaWithPage?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
  
  /* DETAIL */
  getById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listMarcaWithPage/${id}`);
  }

  /* CREATE */
  create(marca: Marca): Observable<any> {
    return this.httpClient.post(`${this.URL}/create`, marca);
  }
  
  /* DELETE */
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/delete/${id}`);
  }

}
