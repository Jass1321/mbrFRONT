import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  areaURL = "http://localhost:1321/departamentos";

  areaOfiURL = "http://localhost:1321/area/";

  constructor(private httpClient: HttpClient) { } 

  /*  CREATE AREA WITH SELECT DEPA */
  public saveArea (area: any): Observable<any>{
    return this.httpClient.post(this.areaOfiURL + 'create', area)
  }

  public removeArea (id: number): Observable<any>{
    return this.httpClient.delete(this.areaOfiURL + 'delete/'+id)
  }


  /* LIST */
  getListAllArea(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(`${this.areaURL}/listArea?` + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  /* LIST AREA BY DEPA ID*/
  getAreasById(id: number ): Observable<any> {
    return this.httpClient.get<any>(`${this.areaURL}/listDepa/${id}/areas`);
  }

  /* DETAIL */
  getAreaIdByIdDep(idArea:number, idDep:number):Observable<any>{
    return this.httpClient.get<any>(`${this.areaURL}/listDepa//${idDep}/areas/${idArea}`);
  }

  /*  CREATE BY ID DEPA */
  createArea(id: number, area: Area): Observable<any> {
    return this.httpClient.post(`${this.areaURL}/create/${id}/areas`, area);
  }

  
  
  /* UPDATE
  updateArea(idDep: number, idArea: number, area: Area): Observable<Object> {
    return this.httpClient.put(`${this.areaURL}/update/${idDep}/areas/${idArea}`, area);
  }
   */
  

  /* DELETE */
  deleteArea(idDep: number,idArea: number): Observable<Object> {
    return this.httpClient.delete(`${this.areaURL}/delete/${idDep}/areas/${idArea}`);
  }


}
