import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  URL = "http://localhost:1321/servicios";

  constructor(private httpClient: HttpClient ) { }

  /* LIST WITH PAGE*/
  getListWithPage(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/listServicioWithPage?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  /* LIST BY TIPO ID */
  getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/tipo/${id}/servicios`);
  }

  /* DETAIL AUN NO SE USA*/
  getIdByIdTipo(idSub: number, idFam: number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/tipo/${idFam}/servicios/${idSub}`);
  }

  /* CREATE DY ID TIPO */
  create(id: number, servicio: Servicio): Observable<any> {
    return this.httpClient.post(`${this.URL}/create/${id}/servicios`, servicio);
  }

  /* CREATE  WITH SELECT TIPO */
  public save(servicio: any): Observable<any> {
    return this.httpClient.post(this.URL + '/save/servicios', servicio)
  }

  /* DELETE */
  delete(idTipo: number, idServ: number,): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/delete/${idTipo}/servicios/${idServ}`);
  }

  /*  DELETE  WITH SELECT TIPO */
  public remove(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + '/delete/servicios/' + id)
  }
}
