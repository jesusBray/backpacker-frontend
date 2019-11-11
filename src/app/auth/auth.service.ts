import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable, of } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const mockData = [
  {
    id: 22,
    apellido: "Gutierez",
    nombre: "Gonzalo",
    pasword: "gonz123",
    telefono: 232333
  },
  {
    id: 122,
    apellido: "Fernandez",
    nombre: "Romulo",
    pasword: "rom321",
    telefono: 4122222
  },
  {
    id: 712,
    apellido: "Fernandez",
    nombre: "adm ",
    pasword: "adm",
    telefono: 4122222
  },
]

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url: string= 'http://localhost:8080/usuarios';
  private dataSource: User[] = mockData;
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  getUsers(): Observable<User[]> {
    return new Observable<User[]>((subscriber) => {
      // subscriber.next(this.dataSource);
    });
    // return this.http.get<User[]>(this.url, this.hhttpOptions);
  }

  public getUserById(name: string):Observable<User> {
    return new Observable<User>(resp => {
      let userFind = this.dataSource.forEach(value => value.nombre);
      // resp.next(this.dataSource.find(user => user.nombre === name));
      // resp.next(userFind);
    });
    // this.http.get<User[]>(`${this.url}/${id}`);
  }

  public getAllUsers(): Observable<User[]>{
    return new Observable(resp => {
      // resp.next(this.dataSource);
    });
  }

  public loadConect(id):boolean{
    let user = localStorage.getItem(id);
    if (user != null) {
      return true;
    }
    return false;
  }
}

