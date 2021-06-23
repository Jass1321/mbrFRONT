import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  depURL = "http://localhost:1321/departamentos";

  constructor(private httpClient: HttpClient) { } 

  /* LIST SIMPLE*/
  public getDeps(): Observable<any>{
    return this.httpClient.get(this.depURL + '/listSelectDep')
  }
  /* LIST WITH PAGE*/
  getListAllDepa(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.depURL}/listDepa?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
  
  /* DETAIL */
  getDepById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.depURL}/listDepa/${id}`);
  }

  /* CREATE */
  createDepartamento(departamento: Departamento): Observable<any> {
    return this.httpClient.post(`${this.depURL}/create`, departamento);
  }

  /* 
  UPDATE 
  updateDepartamento(id: number, departamento: Departamento): Observable<Object> {
    return this.httpClient.put(`${this.depURL}/update/${id}`, departamento);
  }
  */
  
  /* DELETE */
  deleteDepartamento(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.depURL}/delete/${id}`);
  }
}
