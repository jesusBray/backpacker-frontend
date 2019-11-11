import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyBus } from "../module/company-bus";

const mockBuses = 
[
  {
    id:'12333',
    name:'Bolivar',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'345345',
    name:'Trans Benito',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'5677',
    name:'Copacabana',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'6767676',
    name:'Trans La Paz',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
]

@Injectable({
  providedIn: 'root'
})

export class CompanyBusService {

  private buses:CompanyBus[]=mockBuses;
  url:string = "localhost://4200";

  constructor() { }
  public getBusById(name):Observable<CompanyBus>{
    return new Observable<CompanyBus>(resp => {
      resp.next(this.buses.find(value => {
        value.name == name
      }))
    })
  }

}
