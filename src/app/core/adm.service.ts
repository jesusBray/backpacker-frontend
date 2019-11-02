import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { from,pipe } from 'rxjs';
import { filter, map, take, findIndex } from 'rxjs/operators';
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
      // value.next(this.sourceElements);
      // const val = of(mock);
      // val.pipe(filter(ele => ele !== user));
      // value.next(of(mock));
      // value.next(this.sourceElements.filter(value => value.id !== id));
      // let list = of(this.sourceElements).pipe(filter(v => v != user.id))
    })
  }


  deleteUserById(userId:number):Observable<User[]>{
    // for (let index = 0; index < this.sourceElements.length; index++) {
    //   if (userId == this.sourceElements[index].id) {
    //     // this.sourceElements.filter(element => element !== userId);
    //   }
    // }
    // var myObservableArray = ko.observableArray();    // Initially an empty array
    // myObservableArray.push('Some value'); 
    return new Observable<User[]>(value => {
      value.next(this.sourceElements.filter(resp => resp.id !== userId));
    });
  }

//get users
  getUsers(): Observable<User[]> {
    return new Observable<User[]>((subscriber) => {
      subscriber.next(this.sourceElements);
    });
    // return this.http.get<User[]>(`Access-Control-Allow-Origin: ${this.url}/usuarios/https://joke-api-strict-cors.appspot.com/jokes/random`);
  }

//create users
  createUser(user: any): Observable<any> {
    return new Observable(value => {
      value.next(this.sourceElements.push(user))
    })
    // return this.http.post<any>(`${this.url}`, user);
  }

  getUserById(userId): Observable<User[]> {
    return new Observable<User[]>(resp => {
      // value.next(this.sourceElements.filter(ele => ele == value));
      resp.next(this.sourceElements)
    }).pipe(filter(elem => elem == userId));
    //.pipe(map(userId) => )
    //.pipe(filter(elem => elem == userId));
  }

  updateUser(user: User):Observable<any> {
    return new Observable<User>(resp => {
      //value aux;
      let newUser;
      this.getUserById(user.id).subscribe(value => {
        newUser = value;
      });
      resp.next(newUser)
    })
  }
}