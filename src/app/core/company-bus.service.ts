import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../module/user";
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyBusService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };
  
  private url: string= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  deleteBuses(id:number):Observable<any> {
    return this.http.delete(`${this.url}/buses/${id}`,this.httpOptions)
  }

  getAllBuses():Observable<any>{
    return this.http.get<any>(`${this.url}/buses`,this.httpOptions);
  }

  createBus(bus): Observable<any> {
    return this.http.post(`${this.url}/buses`,bus,this.httpOptions);
  }
  
  getBusById(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}/buses/${id}`,this.httpOptions);
  }
  
  updateBus(id,bus):Observable<any>{
    return this.http.patch(`${this.url}/buses/${id}`,bus,this.httpOptions);
  }
}
