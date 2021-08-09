import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Familia } from '../models/familia';

@Injectable({
  providedIn: 'root'
})

export class FamiliaService {

  URL = "http://localhost:1321/familias";

  constructor(private httpClient: HttpClient) { } 

  /* LIST WITH PAGE*/
  getListWithPage(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listFamilia?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
  
  /* DETAIL */
  getById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listFamilia/${id}`);
  }

  /* CREATE */
  create(familia: Familia): Observable<any> {
    return this.httpClient.post(`${this.URL}/create`, familia);
  }
  
  /* DELETE */
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/delete/${id}`);
  }

}
