import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subfamilia } from '../models/subfamilia';

@Injectable({
  providedIn: 'root'
})
export class SubfamiliaService {
  
  URL = "http://localhost:1321/familias";

  constructor(private httpClient: HttpClient) { } 

  
  /* LIST SIMPLE*/
  public getSubfamilia(): Observable<any>{
    return this.httpClient.get(this.URL + '/listSub')
  }

  /* LIST WITH PAGE*/
  getListWithPage(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listSubfamilia?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
  
  /* LIST SUBFAM BY FAM ID */
  getById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listFamilia/${id}/subfamilias`);
  }

  /* DETAIL AUN NO SE USA*/
  getIdByIdFam(idSub:number, idFam:number):Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/listFamilia/${idFam}/subfamilias/${idSub}`);
  }

  /* CREATE DY ID FAM */
  create(id: number, subfamilia: Subfamilia): Observable<any> {
    return this.httpClient.post(`${this.URL}/create/${id}/subfamilias`, subfamilia);
  }

  /*  CREATE AREA WITH SELECT DEPA */
  public save (subfamilia: any): Observable<any>{
    return this.httpClient.post(this.URL + '/save/subfamilias', subfamilia)
  }

  /* DELETE */
  delete(idFam:number, idSub:number,): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/delete/${idFam}/subfamilias/${idSub}`);
  }

  /*  DELETE AREA WITH SELECT DEPA */
  public remove(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + '/delete/subfamilias/'+id)
  } 
}
