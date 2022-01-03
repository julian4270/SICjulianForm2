import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  private API_SERVER = "http://localhost:8080/pc/"; 
  constructor(
    private httpclient: HttpClient

  ) { }

  public getAllPC(): Observable<any>{
    return this.httpclient.get(this.API_SERVER)
  }
}
