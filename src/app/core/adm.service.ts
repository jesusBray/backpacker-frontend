import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../module/user";
import { take } from 'rxjs/operators';

const source = [{
  id:1,
  name:"Juan",
  apellido:"Rodigres"
},{
  id:2,
  name:"Roberth",
  apellido:"Targarian"
},{
  id:3,
  name:"Jesus",
  apellido:"Paye"
}]

@Injectable({
  providedIn: 'root'
})

export class AdmService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  // headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  // hhttpOptions = {
  //   headers: this.headers
  // };
  
  // private url: string= 'http://localhost:8080/usuarios';

  public url:string ='/usuarios';
  private sourceElements: User[] = source;
  constructor(private http: HttpClient) { }


  deleteUser(id:number) {
    return new Observable<User[]>((value) => {
      if (this.sourceElements.length <= 1) {
        value.next(this.sourceElements)
      };
      value.next(this.sourceElements.filter(value => value.id != id))
    }).subscribe(resp => this.sourceElements = resp);
    // return this.http.delete(`${this.url}/${id}`,this.httpOptions)
  }
  

  getUsers(): Observable<User[]> {
    return new Observable<User[]>((subscriber) => {
      subscriber.next(this.sourceElements);
    });
    // return this.http.get<User[]>(this.url, this.hhttpOptions);
  }

  createUser(user: User): Observable<User[]> {
    return new Observable(value => {
      this.sourceElements.push(user);
      value.next(this.sourceElements);
    })
    // return this.http.post(`${this.url}`,user);
  }

  createListUser(user: User)/*:Observable<User[]>*/{
    new Observable<User[]>(value => {
      value.next(this.sourceElements)
    }).pipe(take(this.sourceElements.push(user))).
    subscribe(resp => this.sourceElements = resp);
    // return this.http.post(`${this.url}`,user);
  }

  getUserById(userId:User): Observable<User> {
    return new Observable<User>(resp => {
      resp.next(this.sourceElements.find(elem => elem.id == userId.id))
    })
  }

  updateUser(user: User)/*:Observable<User[]>*/ {
    let value = this.sourceElements.find(value => value.id == user.id);
    value.id = user.id;
    value.name = user.name
    value.apellido = user.apellido
    // return this.http.patch<User[]>(`${this.url}/${user.id}`,user,this.httpOptions);
  }
  
  getUserByIdB(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`,this.httpOptions);
  }
  
}