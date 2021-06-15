import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  bancoURL = "http://localhost:1321/banco/";

  constructor(private httpClient: HttpClient) { } 

  public getAllBancos(): Observable<any>{
    return this.httpClient.get(this.bancoURL + 'list')
  }
}
