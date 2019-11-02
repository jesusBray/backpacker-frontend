import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { from,pipe } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
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

  public url:string ='localhost://123123/asdas';

  //delet userId
  deleteUser(id:number):Observable<User[]> {
    return new Observable<User[]>((value) => {
      value.next(this.sourceElements.filter(value => value.id !== id))
      // value.next(this.sourceElements);
      // const val = of(mock);
      // val.pipe(filter(ele => ele !== user));
      // value.next(of(mock));
      // value.next(this.sourceElements.filter(value => value.id !== id));
      // let list = of(this.sourceElements).pipe(filter(v => v != user.id))
    })
  }

  deleteUsers(userId:number):any{
    for (let index = 0; index < this.sourceElements.length; index++) {
      if (userId == this.sourceElements[index].id) {
        // this.sourceElements.filter(element => element !== userId);
      }
    }
    
  }

//get users
  getUsers(): Observable<User[]>{
    return new Observable<User[]>((subscriber) => {
      subscriber.next(this.sourceElements);
    });
    // return this.http.get(this.url)
  }

//create users
  createUser(user: any): Observable<any> {
    return new Observable(value => {
      value.next(this.sourceElements.push(user))
    })
    // return this.http.post<any>(`${this.url}`, user);
  }

  getUserById(userId): Observable<User[]> {
    // return this.http.get(this.url, userId);
    // const squareValues = map((val: number) => val * val);
    // const nums = of(1, 2, 3);
    // squaredNums = squareValues(nums);
    return new Observable<User[]>(value => {
      value.next(this.sourceElements)
    }

    ).pipe(filter(elem => elem == userId));
    
    // const squareValues = map((val: number) => val * val);
    // const squaredNums = squareValues(nums);
  }

}

