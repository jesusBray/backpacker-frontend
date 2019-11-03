import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  sourceElements: User[] = source;
  constructor(private http: HttpClient) { }

  public url:string ='http://localhost:8080';

  //delet userId
  deleteUser(id:number) {
    return new Observable<User[]>((value) => {
      value.next(this.sourceElements.filter(value => value.id != id))
    }).subscribe(resp => this.sourceElements = resp);
  }

  getUsers(): Observable<User[]> {
    return new Observable<User[]>((subscriber) => {
      subscriber.next(this.sourceElements);
    });
  }

  createUser(user: User): Observable<User[]> {
    return new Observable(value => {
      this.sourceElements.push(user);
      value.next(this.sourceElements);
    })
  }

  createListUser(user: User) {
    new Observable<User[]>(value => {
      value.next(this.sourceElements)
    }).pipe(take(this.sourceElements.push(user))).
    subscribe(resp => this.sourceElements = resp);
  }

  getUserById(userId:User): Observable<User> {
    return new Observable<User>(resp => {
      resp.next(this.sourceElements.find(elem => elem.id == userId.id))
    })
  }

  //aqui se obtiene por argumento un usuario espesifico para ser editado y se reasignan los datos
  updateUser(user: User): void {
    let value = this.sourceElements.find(value => value.id == user.id);
    value.id = user.id;
    value.name = user.name
    value.apellido = user.apellido
  }
  
  updateUserById(user:User):void{
    new Observable<User[]>(resp => {
      let elem = this.sourceElements.find(value => value.id == user.id);
      elem.name = user.name;
      elem.apellido = user.apellido;
      resp.next(this.sourceElements)
      }).subscribe(resp => {
        this.sourceElements = resp;
      })
  }
  
}