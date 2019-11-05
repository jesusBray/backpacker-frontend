import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyBus } from "../module/company-bus";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  private url:string ='http://192.168.1.205:3000';
  constructor(private http: HttpClient) { }

  public getPassengers():Observable<CompanyBus[]> {
    return this.http.get<CompanyBus[]>(`${this.url}/empresas`,httpOptions)
  }

  public getPassengerById(user: any):Observable<CompanyBus> {
    return this.http.get<CompanyBus>(`${this.url}/empresas/${user}`,httpOptions);
  }
}
