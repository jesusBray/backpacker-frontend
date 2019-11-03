import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../module/user";

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

  sourceElements: User[] = source;
  constructor(private http: HttpClient) { }

  public url:string ='http://localhost:8080';

  //delet userId
  deleteUser(id:number):Observable<User[]> {
    return new Observable<User[]>((value) => {
      value.next(this.sourceElements.filter(value => value.id != id))
    })
  }

  deleteUserById(userId:number):Observable<User[]>{
    return new Observable<User[]>(value => {
    });
  }

  getUsers(): Observable<User[]> {
    return new Observable<User[]>((subscriber) => {
      subscriber.next(this.sourceElements);
    });
  }

  createUser(user: any): Observable<any> {
    return new Observable(value => {
      value.next(this.sourceElements.push(user))
    })
  }
  
  getUserById(userId): Observable<User> {
    return new Observable<User>(resp => {
      resp.next(this.sourceElements.find(elem => elem.id == userId))
    })
  }

  //aqui se obtiene por argumento un usuario espesifico para ser editado y se reasignan los datos
  updateUser(user: User) {
    let value = this.sourceElements.find(value => value.id == user.id)
    value.name = user.name
    value.apellido = user.apellido
  }
}